import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "accent" | "secondary" | "onColor" | "quiet";
type Size = "sm" | "md" | "lg";

// border-color lives entirely in each variant below, never here — a shared
// border-color utility here would fight per-variant border classes for the
// same CSS property, and Tailwind's utility layer doesn't order by
// className string position, so the winner would be unpredictable.
const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold text-sm transition-colors duration-150 cursor-pointer no-underline border disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-on-primary border-transparent hover:bg-primary-active",
  accent: "bg-accent text-on-accent border-transparent hover:bg-accent-active",
  secondary: "bg-transparent text-primary border-hairline hover:bg-surface-card",
  onColor: "bg-canvas text-ink border-transparent hover:bg-surface-card",
  quiet: "bg-transparent text-primary border-transparent hover:bg-surface-card",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5",
  md: "h-11 px-5",
  lg: "h-[52px] px-7 text-[15px]",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  fullWidth?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  style,
  children,
  ...rest
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} style={style} {...rest}>
      {children}
    </button>
  );
}
