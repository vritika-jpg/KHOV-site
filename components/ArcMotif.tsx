type Props = {
  variant?: "quarter" | "half" | "rule";
  fill?: "mist" | "stone" | "seaglass";
  height?: number;
  flip?: boolean;
  className?: string;
};

const paths = {
  quarter: "M0 400 A400 400 0 0 1 400 0 L400 400 Z",
  half: "M0 400 A200 200 0 0 1 400 400 Z",
  rule: "M0 400 C120 240 280 240 400 400 L400 340 C280 180 120 180 0 340 Z",
};

const fills = {
  mist: "var(--accent-mist)",
  stone: "var(--accent-stone)",
  seaglass: "var(--card-seaglass)",
};

/** The one decorative element in the design system: a large flat arc. */
export default function ArcMotif({
  variant = "quarter",
  fill = "mist",
  height = 320,
  flip = false,
  className = "",
}: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      width="100%"
      height={height}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      style={{ display: "block", transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d={paths[variant]} fill={fills[fill]} />
    </svg>
  );
}
