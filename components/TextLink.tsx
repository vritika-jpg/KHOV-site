import Link from "next/link";

type Props = {
  href: string;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function TextLink({
  href,
  withArrow = false,
  className = "",
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 text-[15px] font-medium text-primary border-b border-hairline hover:text-primary-active hover:border-primary-active pb-px no-underline ${className}`}
    >
      {children}
      {withArrow && <span aria-hidden="true">&rarr;</span>}
    </Link>
  );
}
