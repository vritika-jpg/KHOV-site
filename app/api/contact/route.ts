import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { sendContactEmail } from "@/lib/resend";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
};

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
  const result = await sendContactEmail(env.RESEND_API_KEY, { name, email, company, message });

  if (!result.ok) {
    if (result.reason === "not_configured") {
      console.log("POST /api/contact — RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Contact form is not set up yet. Please email us directly." },
        { status: 500 }
      );
    }
    console.log("POST /api/contact — Resend request failed:", result.status, result.detail);
    return NextResponse.json(
      { error: "Could not send your message right now. Please try again or email us directly." },
      { status: 502 }
    );
  }

  console.log("POST /api/contact — email sent to hello@khovgroup.com");
  console.log("POST /api/contact — done");
  return NextResponse.json({ ok: true });
}
