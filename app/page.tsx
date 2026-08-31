import Band from "@/components/Band";
import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import ArcMotif from "@/components/ArcMotif";
import FeatureCard from "@/components/FeatureCard";
import CtaBand from "@/components/CtaBand";
import Link from "next/link";

const services: {
  color: "deep" | "aqua" | "dune" | "coral" | "seaglass";
  eyebrow: string;
  title: string;
  span?: boolean;
}[] = [
  { color: "deep", eyebrow: "01", title: "AI Opportunity Assessment" },
  { color: "aqua", eyebrow: "02", title: "AI Assistants and Document Intelligence" },
  { color: "dune", eyebrow: "03", title: "AI Workflow Automation" },
  { color: "coral", eyebrow: "04", title: "AI Training and Enablement" },
  { color: "seaglass", eyebrow: "05", title: "Fractional AI Advisor", span: true },
];

const steps = [
  {
    eyebrow: "Step one",
    title: "Assess",
    body: "We map your workflows and find what is worth automating.",
  },
  {
    eyebrow: "Step two",
    title: "Build",
    body: "We ship the smallest thing that works, then expand.",
  },
  {
    eyebrow: "Step three",
    title: "Hand off",
    body: "We train your team so it runs without us.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-canvas px-8 py-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 grid gap-6">
            <span className="text-xs font-semibold uppercase tracking-[1.5px] text-muted">
              Washington DC area
            </span>
            <h1 className="font-display text-[56px] md:text-[72px] leading-[1] tracking-[-2.5px] text-ink m-0 text-pretty">
              AI that actually gets used
            </h1>
            <p className="text-lg text-body m-0 max-w-[520px]">
              We help DC-area businesses find the AI work worth doing, then build it.
            </p>
            <div className="flex gap-3 flex-wrap mt-2">
              <Button href="/contact" variant="primary" size="lg">
                Book a call
              </Button>
            </div>
          </div>
          <div className="md:col-span-5">
            <ArcMotif variant="quarter" fill="mist" height={380} />
          </div>
        </div>
      </section>

      <Band tone="canvas" pad="tight">
        <div className="grid gap-8">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <h2 className="font-display text-[40px] leading-[1.1] tracking-[-1px] text-ink m-0">
              What we do
            </h2>
            <TextLink href="/services" withArrow>
              All services
            </TextLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href="/services"
                className={`no-underline ${s.span ? "md:col-span-2" : ""}`}
              >
                <FeatureCard color={s.color} eyebrow={s.eyebrow} className="h-full">
                  <h3 className="text-2xl font-semibold tracking-[-0.3px] m-0">{s.title}</h3>
                  <span className="text-sm font-medium opacity-85 mt-auto pt-4">
                    Learn more &rarr;
                  </span>
                </FeatureCard>
              </Link>
            ))}
          </div>
        </div>
      </Band>

      <Band tone="soft">
        <div className="grid gap-8">
          <h2 className="font-display text-[40px] leading-[1.1] tracking-[-1px] text-ink m-0">
            How we work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <FeatureCard key={step.title} color="cream">
                <span className="text-xs font-semibold uppercase tracking-[1.5px] text-muted">
                  {step.eyebrow}
                </span>
                <h3 className="text-2xl font-semibold tracking-[-0.3px] text-ink m-0">
                  {step.title}
                </h3>
                <p className="text-base text-ink opacity-80 m-0">{step.body}</p>
              </FeatureCard>
            ))}
          </div>
        </div>
      </Band>

      <Band tone="canvas">
        <CtaBand tone="dark" headline="Tell us what is not working">
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            style={{ background: "var(--card-coral)", color: "var(--on-dark)" }}
          >
            Book a call
          </Button>
        </CtaBand>
      </Band>

      <ArcMotif variant="rule" fill="mist" height={120} />
    </div>
  );
}
