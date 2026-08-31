type Props = {
  headline: string;
  body?: string;
  tone?: "soft" | "dark";
  children?: React.ReactNode;
};

export default function CtaBand({ headline, body, tone = "soft", children }: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={`rounded-3xl px-8 py-20 grid gap-6 justify-items-center text-center ${
        dark ? "bg-surface-dark text-on-dark" : "bg-surface-soft text-ink"
      }`}
    >
      <h2 className="font-display text-[40px] leading-[1.1] tracking-[-1px] max-w-[720px] m-0">
        {headline}
      </h2>
      {body && (
        <p className={`text-base max-w-[560px] m-0 ${dark ? "text-on-dark-soft" : "text-body"}`}>
          {body}
        </p>
      )}
      {children && <div className="flex gap-3 flex-wrap justify-center">{children}</div>}
    </div>
  );
}
