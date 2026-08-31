import Link from "next/link";

export default function Wordmark() {
  return (
    <Link
      href="/"
      className="font-display text-xl font-medium tracking-[-0.4px] text-ink whitespace-nowrap hover:text-ink"
      style={{ fontVariationSettings: "var(--font-display-variation)" }}
    >
      KHOV<span className="text-muted-soft"> Group</span>
    </Link>
  );
}
