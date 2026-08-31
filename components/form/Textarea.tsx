import type { TextareaHTMLAttributes } from "react";

type Props = {
  invalid?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ invalid = false, className = "", rows = 5, ...rest }: Props) {
  return (
    <textarea
      rows={rows}
      className={`w-full rounded-md border bg-canvas text-ink px-4 py-3 outline-none resize-y transition-colors ${
        invalid ? "border-error" : "border-hairline focus:border-primary"
      } ${className}`}
      {...rest}
    />
  );
}
