import Band from "@/components/Band";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — KHOV Group",
};

export default function Contact() {
  return (
    <Band tone="canvas" className="pt-24">
      <div className="grid grid-cols-1 md:grid-cols-11 gap-12 items-start">
        <div className="md:col-span-5 grid gap-4">
          <span className="text-xs font-semibold uppercase tracking-[1.5px] text-muted">
            Contact
          </span>
          <h1 className="font-display text-[56px] leading-[1.05] tracking-[-2px] text-ink m-0">
            Tell us what you are trying to fix. We will tell you if we can help.
          </h1>
          <p className="text-base text-body m-0">
            Or email{" "}
            <a href="mailto:hello@khovgroup.com" className="text-primary font-medium">
              hello@khovgroup.com
            </a>
            .
          </p>
        </div>

        <div className="md:col-span-6">
          <ContactForm />
        </div>
      </div>
    </Band>
  );
}
