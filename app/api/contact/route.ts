import { NextResponse } from "next/server";

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

  const { name, email, message } = body;

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

  // No email/database service is wired up yet — log the submission so it's
  // visible during development. Swap this for a real integration (Resend,
  // Supabase, etc.) once one is chosen.
  console.log("POST /api/contact — new submission:", {
    name,
    company: body.company,
    email,
    message,
  });

  console.log("POST /api/contact — done");
  return NextResponse.json({ ok: true });
}
