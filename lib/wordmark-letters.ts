export type WordmarkLetter = "K" | "H" | "O" | "V";

export const WORDMARK_LETTERS: WordmarkLetter[] = ["K", "H", "O", "V"];

/** Per-letter hover color, keyed to the design system's card/accent tokens.
 *  Never --primary here — it's identical to --ink, so that letter would
 *  look like it never animated. */
export const LETTER_COLORS: Record<WordmarkLetter, string> = {
  K: "var(--card-aqua)",
  H: "var(--card-dune)",
  O: "var(--accent-stone)",
  V: "var(--card-coral)",
};
