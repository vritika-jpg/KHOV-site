"use client";

import Image from "next/image";
import type { WordmarkLetter } from "@/lib/wordmark-letters";
import { useWordmarkPin } from "@/lib/wordmark-pin-context";

type Props = {
  name: string;
  role: string;
  initials: string;
  letter: WordmarkLetter;
  /** Path under /public, e.g. "/team/megan.jpg". Omit to show the initials placeholder. */
  photo?: string;
};

export default function FounderCard({ name, role, initials, letter, photo }: Props) {
  const { setPinned } = useWordmarkPin();

  return (
    <div
      className="grid gap-4"
      onMouseEnter={() => setPinned(letter)}
      onMouseLeave={() => setPinned(null)}
    >
      <div className="relative h-[260px] rounded-2xl overflow-hidden bg-surface-card flex items-center justify-center">
        {photo ? (
          <Image src={photo} alt={name} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
        ) : (
          <span className="font-display text-4xl text-muted-soft">{initials}</span>
        )}
      </div>
      <div className="grid gap-1">
        <h3 className="text-lg font-semibold text-ink m-0">{name}</h3>
        <span className="text-xs font-semibold uppercase tracking-[1.5px] text-muted min-h-[34px]">
          {role}
        </span>
      </div>
    </div>
  );
}
