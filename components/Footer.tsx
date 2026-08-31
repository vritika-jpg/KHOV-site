import Wordmark from "@/components/Wordmark";

const columns = [
  {
    title: "Contact",
    links: [{ label: "hello@khovgroup.com", href: "mailto:hello@khovgroup.com" }],
  },
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-soft text-body">
      <div className="max-w-[1280px] mx-auto px-8 py-20 grid gap-12">
        <div className="flex gap-12 flex-wrap justify-between">
          <div className="grid gap-3 max-w-[280px]">
            <Wordmark />
            <p className="text-sm text-muted m-0">
              Technology consulting for small and mid-size businesses in the Washington DC area.
            </p>
          </div>

          <div className="flex gap-12 flex-wrap">
            {columns.map((c) => (
              <div key={c.title} className="grid gap-3 min-w-[140px]">
                <span className="text-xs font-semibold uppercase tracking-[1.5px] text-muted-soft">
                  {c.title}
                </span>
                {c.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm text-muted no-underline hover:text-ink"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-hairline pt-4 text-sm font-medium text-muted-soft">
          © 2026 KHOV Group LLC
        </div>
      </div>
    </footer>
  );
}
