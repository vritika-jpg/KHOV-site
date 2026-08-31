type Props = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

export default function Field({ label, htmlFor, required = false, error, children }: Props) {
  return (
    <label htmlFor={htmlFor} className="grid gap-2">
      <span className="text-base font-semibold text-ink">
        {label}
        {required && <span className="text-muted-soft font-normal"> *</span>}
      </span>
      {children}
      {error && <span className="text-sm text-error">{error}</span>}
    </label>
  );
}
