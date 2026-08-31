"use client";

import { useState, type FormEvent } from "react";
import Field from "@/components/form/Field";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import Button from "@/components/Button";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body: unknown = await res.json().catch(() => null);
        const message =
          body && typeof body === "object" && "error" in body && typeof body.error === "string"
            ? body.error
            : "Something went wrong. Please try again.";
        throw new Error(message);
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="bg-surface-card rounded-2xl p-8">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <Field label="Name" htmlFor="khov-name" required>
          <Input id="khov-name" name="name" required />
        </Field>
        <Field label="Company" htmlFor="khov-company">
          <Input id="khov-company" name="company" />
        </Field>
        <Field label="Email" htmlFor="khov-email" required>
          <Input id="khov-email" name="email" type="email" required />
        </Field>
        <Field label="Message" htmlFor="khov-message" required>
          <Textarea id="khov-message" name="message" rows={5} required />
        </Field>

        <div className="flex items-center gap-4 flex-wrap">
          <Button type="submit" variant="accent" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send"}
          </Button>
          {status === "sent" && (
            <span className="text-sm text-success">Thanks. We will be in touch.</span>
          )}
          {status === "error" && <span className="text-sm text-error">{error}</span>}
        </div>
      </form>
    </div>
  );
}
