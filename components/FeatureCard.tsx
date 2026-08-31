type Color = "deep" | "aqua" | "coral" | "dune" | "seaglass" | "cream";

const fills: Record<Color, { bg: string; text: string; soft: string }> = {
  deep: { bg: "bg-card-deep", text: "text-on-dark", soft: "text-on-dark-soft" },
  aqua: { bg: "bg-card-aqua", text: "text-ink", soft: "text-body-strong" },
  coral: { bg: "bg-card-coral", text: "text-ink", soft: "text-body-strong" },
  dune: { bg: "bg-card-dune", text: "text-ink", soft: "text-body-strong" },
  seaglass: { bg: "bg-card-seaglass", text: "text-ink", soft: "text-body-strong" },
  cream: { bg: "bg-surface-card", text: "text-ink", soft: "text-muted" },
};

type Props = {
  color?: Color;
  eyebrow?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function FeatureCard({
  color = "deep",
  eyebrow,
  className = "",
  onClick,
  children,
}: Props) {
  const fill = fills[color];
  return (
    <div
      onClick={onClick}
      className={`${fill.bg} ${fill.text} rounded-2xl p-8 flex flex-col gap-3 ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {eyebrow && (
        <span className={`${fill.soft} text-xs font-semibold uppercase tracking-[1.5px]`}>
          {eyebrow}
        </span>
      )}
      {children}
    </div>
  );
}
