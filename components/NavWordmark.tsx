"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LETTER_COLORS, WORDMARK_LETTERS, type WordmarkLetter } from "@/lib/wordmark-letters";
import { useWordmarkPin } from "@/lib/wordmark-pin-context";

const STEP_MS = 60;

export default function NavWordmark() {
  const [lit, setLit] = useState<Partial<Record<WordmarkLetter, string>>>({});
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const { pinned } = useWordmarkPin();

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  // Clear timers so a fast in-and-out hover can't leave the wrong step
  // scheduled to fire after the sequence should have reversed.
  useEffect(() => clearTimers, []);

  function runSequence(entering: boolean) {
    clearTimers();
    const seq = entering ? WORDMARK_LETTERS : [...WORDMARK_LETTERS].reverse();
    seq.forEach((letter, i) => {
      timers.current.push(
        setTimeout(() => {
          setLit((prev) => {
            const next = { ...prev };
            if (entering) next[letter] = LETTER_COLORS[letter];
            else delete next[letter];
            return next;
          });
        }, i * STEP_MS)
      );
    });
  }

  function colorFor(letter: WordmarkLetter) {
    if (pinned) {
      return pinned === letter ? LETTER_COLORS[letter] : "var(--ink)";
    }
    return lit[letter] || "var(--ink)";
  }

  return (
    <Link
      href="/"
      onMouseEnter={() => runSequence(true)}
      onMouseLeave={() => runSequence(false)}
      className="font-display text-xl font-medium tracking-[-0.4px] text-ink whitespace-nowrap hover:text-ink"
      style={{ fontVariationSettings: "var(--font-display-variation)" }}
    >
      {WORDMARK_LETTERS.map((letter) => (
        <span key={letter} style={{ color: colorFor(letter), transition: "color 140ms ease" }}>
          {letter}
        </span>
      ))}
      {" Group"}
    </Link>
  );
}
