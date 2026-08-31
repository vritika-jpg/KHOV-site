import type { InputHTMLAttributes } from "react";

type Props = {
  invalid?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ invalid = false, className = "", ...rest }: Props) {
  return (
    <input
      className={`w-full h-11 rounded-md border bg-canvas text-ink px-4 outline-none transition-colors ${
        invalid
          ? "border-error"
          : "border-hairline focus:border-primary"
      } disabled:bg-surface-soft disabled:text-muted-soft ${className}`}
      {...rest}
    />
  );
}
