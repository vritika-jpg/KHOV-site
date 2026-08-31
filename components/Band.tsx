type Tone = "canvas" | "soft" | "strong" | "dark";
type Pad = "section" | "tight" | "none";

const tones: Record<Tone, string> = {
  canvas: "bg-canvas text-body",
  soft: "bg-surface-soft text-body",
  strong: "bg-surface-strong text-body",
  dark: "bg-surface-dark text-on-dark",
};

const pads: Record<Pad, string> = {
  section: "py-24",
  tight: "py-12",
  none: "py-0",
};

type Props = {
  tone?: Tone;
  pad?: Pad;
  narrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Band({
  tone = "canvas",
  pad = "section",
  narrow = false,
  className = "",
  children,
}: Props) {
  return (
    <section className={`${tones[tone]} px-8 ${pads[pad]} ${className}`}>
      <div className={`mx-auto ${narrow ? "max-w-[840px]" : "max-w-[1280px]"}`}>
        {children}
      </div>
    </section>
  );
}
