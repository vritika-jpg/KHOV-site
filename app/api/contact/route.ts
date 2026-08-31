import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
};

const CONTACT_INBOX = "hello@khovgroup.com";
const FROM_ADDRESS = "KHOV Group Website <noreply@khovgroup.com>";

export async function POST(request: Request) {
  console.log("POST /api/contact — start");

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    console.log("POST /api/contact — invalid JSON body");
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, company } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    console.log("POST /api/contact — missing required field");
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    console.log("POST /api/contact — invalid email format");
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const { env } = await getCloudflareContext({ async: true });
  const apiKey = env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("POST /api/contact — RESEND_API_KEY not configured");
    return NextResponse.json(
      { error: "Contact form is not set up yet. Please email us directly." },
      { status: 500 }
    );
  }

  const lines = [
    `Name: ${name}`,
    company?.trim() ? `Company: ${company}` : null,
    `Email: ${email}`,
    "",
    message,
  ].filter((line): line is string => line !== null);

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [CONTACT_INBOX],
      reply_to: email,
      subject: `New contact form message from ${name}`,
      text: lines.join("\n"),
    }),
  });

  if (!emailRes.ok) {
    const errText = await emailRes.text().catch(() => "");
    console.log("POST /api/contact — Resend request failed:", emailRes.status, errText);
    return NextResponse.json(
      { error: "Could not send your message right now. Please try again or email us directly." },
      { status: 502 }
    );
  }

  console.log("POST /api/contact — email sent to", CONTACT_INBOX);
  console.log("POST /api/contact — done");
  return NextResponse.json({ ok: true });
}
