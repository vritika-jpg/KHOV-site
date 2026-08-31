import Band from "@/components/Band";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — KHOV Group",
};

const offerings = [
  {
    num: "01",
    title: "AI Opportunity Assessment",
    body: "Fixed-fee, two to four weeks. We map your workflows into a prioritized roadmap. The lowest-risk way to start.",
    tag: "Entry point",
  },
  {
    num: "02",
    title: "AI Assistants and Document Intelligence",
    body: "Source-cited assistants that answer questions from your own documents.",
  },
  {
    num: "03",
    title: "AI Workflow Automation",
    body: "Agents that absorb repetitive work: call answering, booking, drafting, data entry, follow-ups.",
  },
  {
    num: "04",
    title: "AI Training and Enablement",
    body: "Hands-on workshops that make adoption stick. Available in English and French.",
  },
];

export default function Services() {
  return (
    <div>
      <Band tone="canvas" className="pt-24">
        <div className="grid gap-4 max-w-[640px]">
          <span className="text-xs font-semibold uppercase tracking-[1.5px] text-muted">
            Services
          </span>
          <h1 className="font-display text-[56px] leading-[1.05] tracking-[-2px] text-ink m-0">
            Start small. Go further when it earns it.
          </h1>
          <p className="text-base text-body m-0">
            Most clients begin with an assessment. Each step below builds on the one before it.
          </p>
        </div>
      </Band>

      <Band tone="canvas" pad="none">
        <div className="grid gap-4 pb-24">
          {offerings.map((o) => (
            <FeatureCard key={o.num} color="cream">
              <div className="grid grid-cols-1 md:grid-cols-[72px_minmax(0,1fr)_minmax(0,1fr)] gap-6 items-start">
                <span className="font-display text-[32px] leading-[1.15] tracking-[-0.5px] text-muted-soft">
                  {o.num}
                </span>
                <h3 className="text-2xl font-semibold tracking-[-0.3px] text-ink m-0">
                  {o.title}
                </h3>
                <div className="grid gap-3">
                  <p className="text-base text-body m-0">{o.body}</p>
                  {o.tag && (
                    <span className="text-xs font-semibold uppercase tracking-[1.5px] text-muted-soft">
                      {o.tag}
                    </span>
                  )}
                </div>
              </div>
            </FeatureCard>
          ))}

          <FeatureCard color="deep">
            <div className="grid grid-cols-1 md:grid-cols-[72px_minmax(0,1fr)_minmax(0,1fr)] gap-6 items-start">
              <span className="font-display text-[32px] leading-[1.15] tracking-[-0.5px] text-on-dark-soft">
                05
              </span>
              <div className="grid gap-3">
                <span className="text-xs font-semibold uppercase tracking-[1.5px] text-card-seaglass">
                  Ongoing
                </span>
                <h3 className="text-2xl font-semibold tracking-[-0.3px] text-on-dark m-0">
                  Fractional AI Advisor
                </h3>
              </div>
              <div className="grid gap-4 justify-items-start">
                <p className="text-base text-on-dark opacity-85 m-0">
                  Monthly retainer for prioritization and build-versus-buy guidance.
                </p>
                <Button href="/contact" variant="accent">
                  Book a call
                </Button>
              </div>
            </div>
          </FeatureCard>
        </div>
      </Band>
    </div>
  );
}
