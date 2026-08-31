"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavWordmark from "@/components/NavWordmark";
import Button from "@/components/Button";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 bg-canvas border-b border-hairline">
      <div className="max-w-[1280px] mx-auto h-16 px-8 flex items-center gap-8">
        <NavWordmark />

        <nav className="hidden md:flex items-center gap-6 ml-auto">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium no-underline pb-0.5 ${
                  active
                    ? "text-ink shadow-[inset_0_-1px_0_var(--primary)]"
                    : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <Button href="/contact" variant="secondary" size="sm" style={{ height: "44px" }}>
            Contact
          </Button>
        </div>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto w-11 h-11 border border-hairline rounded-md bg-canvas flex flex-col items-center justify-center gap-1 cursor-pointer"
        >
          <span className="w-[18px] h-px bg-ink" />
          <span className="w-[18px] h-px bg-ink" />
          <span className="w-[18px] h-px bg-ink" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline px-8 py-4 grid gap-3">
          {[...links, { label: "Contact", href: "/contact" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-ink no-underline min-h-11 flex items-center"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
