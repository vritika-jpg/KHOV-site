"use client";

import { createContext, useContext, useState, useMemo, type ReactNode } from "react";
import type { WordmarkLetter } from "@/lib/wordmark-letters";

type WordmarkPinContextValue = {
  pinned: WordmarkLetter | null;
  setPinned: (letter: WordmarkLetter | null) => void;
};

const WordmarkPinContext = createContext<WordmarkPinContextValue | null>(null);

/**
 * Lets the Team page's founder cards (far from the nav in the tree) drive
 * which wordmark letter is highlighted, without threading props through
 * the layout. Only the Team page ever calls setPinned — every other page
 * leaves it null and the nav wordmark just runs its own hover sequence.
 */
export function WordmarkPinProvider({ children }: { children: ReactNode }) {
  const [pinned, setPinned] = useState<WordmarkLetter | null>(null);
  const value = useMemo(() => ({ pinned, setPinned }), [pinned]);
  return <WordmarkPinContext.Provider value={value}>{children}</WordmarkPinContext.Provider>;
}

export function useWordmarkPin() {
  const ctx = useContext(WordmarkPinContext);
  if (!ctx) {
    throw new Error("useWordmarkPin must be used within a WordmarkPinProvider");
  }
  return ctx;
}
