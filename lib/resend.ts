type SecretValue = string | { get(): Promise<string> } | undefined;

// Production binds RESEND_API_KEY as a Secrets Store secret (value read via
// an async get()); local dev via .dev.vars gives a plain string instead.
async function resolveSecret(value: SecretValue): Promise<string | null> {
  if (!value) return null;
  return typeof value === "string" ? value : value.get();
}

type ContactEmailInput = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

type SendResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" }
  | { ok: false; reason: "send_failed"; status: number; detail: string };

const CONTACT_INBOX = "hello@khovgroup.com";
const FROM_ADDRESS = "KHOV Group Website <noreply@khovgroup.com>";

export async function sendContactEmail(
  apiKey: SecretValue,
  input: ContactEmailInput
): Promise<SendResult> {
  const key = await resolveSecret(apiKey);
  if (!key) {
    return { ok: false, reason: "not_configured" };
  }

  const lines = [
    `Name: ${input.name}`,
    input.company?.trim() ? `Company: ${input.company}` : null,
    `Email: ${input.email}`,
    "",
    input.message,
  ].filter((line): line is string => line !== null);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [CONTACT_INBOX],
      reply_to: input.email,
      subject: `New contact form message from ${input.name}`,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    return { ok: false, reason: "send_failed", status: res.status, detail };
  }

  return { ok: true };
}
