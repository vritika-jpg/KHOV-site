# KHOV Group Design System — "khov-cove" v0.1

Design system for **KHOV Group LLC**, a technology consulting firm serving small and mid-size businesses in the Washington DC area. The system covers the company website and any adjacent marketing or document work.

The brand reads **calm, warm and established**. The name is spoken as "cove" — a sheltered inlet, a calm place to bring a messy problem. That idea lives *only* in the palette and in one optional arc motif. It never appears in imagery and it must never appear in the copy.

## Sources

The only source provided was a written brief and token spec (`khov-cove` v0.1, pasted in chat) covering colors, typography, radii, spacing, component specs, layout, depth, responsive rules and do/don't rules. **No codebase, Figma file, deck, logo, icon set, font binaries or photography were supplied.** Everything here derives from that brief; anything not in the brief is flagged below under "Substitutions and gaps".

## Three structural commitments

1. The page floor is **shell cream** (`--canvas` #f8f3e8) — never white, never cool gray.
2. Color arrives as **whole card fills, one color per card** — never as borders, gradients or shadows.
3. There is **exactly one accent CTA per page**.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global entry point — `@import` list only. Consumers link this one file. |
| `tokens/` | `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` · `base.css` |
| `components/` | Reusable primitives, grouped by concern (below) |
| `guidelines/` | 18 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/website/` | Click-through recreation of khovgroup.com — see its README |
| `assets/README.md` | What artwork exists (very little) and why |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-Skills entry point for Claude Code |

### Components

**`components/actions/`** — `Button`, `TextLink`
**`components/forms/`** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`
**`components/cards/`** — `FeatureCard`, `ContentCard`, `QuoteCard`, `TierCard`
**`components/navigation/`** — `TopNav`, `Tabs`, `Footer`
**`components/layout/`** — `Band`, `HeroBand`, `CtaBand`
**`components/display/`** — `Badge`, `SectionHeading`, `StatBlock`, `Icon`
**`components/brand/`** — `Wordmark`, `ArcMotif`

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage, variants).

#### Intentional additions

The brief defined component *specs* (button-primary, card-feature-*, text-input, tab, badge, footer …) rather than a component library. Those specs map 1:1 onto the list above. Three additions:

- **`Icon`** — the brief defines no icon set. A thin Lucide wrapper so glyphs inherit `currentColor`; without it every kit screen would hand-roll SVG.
- **`Field`** — label/hint/error wrapper, so the specified `text-input` and `text-input-focused` states have somewhere to live.
- **`StatBlock`** — the brief's display scale needs a figure-plus-caption pattern; used in bands and dark strips.

---

## Content fundamentals

**Voice.** Plain, direct, unhurried. Short declaratives. The reader is a business owner or operations lead who has been let down by a vendor before, so the copy earns trust by being specific and unexcited.

**Person.** "We" for the firm, "you" / "your team" for the reader. Never "I". Never third-person ("KHOV Group believes…") outside of legal or boilerplate lines.

**Casing.** Sentence case everywhere — headlines, buttons, nav, labels. Uppercase appears only in the 12px eyebrow (`caption-uppercase`, +1.5px tracking). No Title Case Headlines. No ALL-CAPS body or buttons.

**Punctuation.** Periods on full-sentence body copy; no period on headlines, buttons, eyebrows or captions. En dashes for ranges ("20–99"). No exclamation marks. No ampersands in prose — spell out "and".

**Length.** Headlines under about 60 characters. Body paragraphs 1–3 sentences. Card body copy one sentence, two at most. Buttons 2–4 words.

**Numbers.** Concrete and rounded honestly: "17 yrs", "$6,500", "two weeks", "94%". Spell out one through ten in prose, use digits in stats and prices.

**Emoji: never.** Not in UI, not in marketing copy, not in slides. Unicode dingbats are limited to the arrow in `TextLink` and the em dash bullet in `TierCard`.

**Banned register — this is the rule that breaks first.** No nautical copy. "Navigate your transformation", "chart a course", "smooth sailing", "anchor", "harbor", "safe haven" all undo the restraint the palette buys. Also out: "leverage", "synergy", "solutions provider", "best-in-class", "world-class", "cutting-edge", "revolutionary", "unlock", "empower", "seamlessly", "AI-powered" (unless literally true and relevant).

**In practice:**

- Hero: "Bring us the system nobody wants to touch." — not "Navigate your digital transformation".
- Service card: "One team on the other end of the phone, with your systems already documented."
- CTA: "Tell us what is not working." / button "Book a discovery call".
- Reassurance: "A 30-minute call, no deck, no pressure. If we are not the right fit we will say so."
- Pricing: "Month-to-month after quarter one." — not "flexible engagement models".
- Form hint: "We reply within one business day."
- Error: "Enter a valid work email." — plain, no apology, no blame.

---

## Visual foundations

**Palette.** A warm coastal-earth set on shell cream. Two colors *act*: `primary` deep water #1a3a3a (CTAs, headings, dark cards) and `accent` dune #e5b048 (one CTA per page, nothing else). Four further colors exist **only as card fills**: aqua #2f9788, coral #d1684a, dune #e5b048, sea glass #a4d4c5 — plus cream #ede4d2. There is no seventh card color. `accent-mist` #c5ddd6 and `accent-stone` #6b7d7a are decorative: motif fills, dividers, icon strokes, chart neutrals. Semantic colors (`success` #3f8f5f, `warning` #c98a1f, `error` #c2452f) are deliberately darker than dune and coral so a status can never be mistaken for a brand color.

**Contrast contract.** Dark ink text on aqua, coral, dune and sea glass — white on aqua or coral is ~3.6:1 and fails. Deep water is the only fill that flips to light text. Dune and sea glass are **fills only**: a dune link or a sea-glass label is a bug. Stone is captions-only as type.

**Type.** `--font-display` Fraunces (variable serif, `SOFT` 30, `WONK` off) for display sizes only; `--font-body` Inter for everything else. Display runs 72 / 56 / 40 / 32 at **weight 500** with negative tracking (−2.5 → −0.5px) — never heavier than 500, never a display serif below 32px. Titles are Inter 600 at 24 / 18 / 16; body Inter 400 at 16 / 14 with 1.55 line-height; caption 13px/500; eyebrow 12px/600 uppercase +1.5px.

**Spacing and layout.** 4px base unit; tokens xxs 4 → section 96. **96px between major bands**, content capped at 1280px and centered, 32px horizontal page gutter (20px on mobile). Hero is a 7/5 split, headline left, motif right. Feature grids 3-up desktop / 2-up tablet / 1-up mobile; tier grids 3-up / 1-up. Card padding 32px (feature, tier) and 24px (content, quote). Controls and inputs are 44px tall at every breakpoint. Grids **reduce column count** rather than scaling cards down.

**Backgrounds.** Flat color only. No photography, no full-bleed imagery, no repeating pattern, no texture, no grain, **no gradients anywhere**. The surface ramp is canvas → surface-soft → surface-card → surface-strong, with at most one `surface-dark` band per page. Footer is `surface-soft` — a dark footer is a bug.

**Depth.** No shadows anywhere. Depth is color contrast between the shell canvas and the colored cards, in exactly four levels: flat (no border, no shadow) · hairline (1px `--hairline`, warm-tinted) · colored card (full fill) · cream card (`surface-card` fill). If a section feels flat, **add a colored card** — not a border, shadow or gradient.

**Corner radii.** Generous: xs 6 (checkbox), sm 8, md 12 (buttons, inputs), lg 16 (content, quote, tier cards), xl 24 (feature cards, CTA band), pill (tabs, badges). Cards are radius + fill, no border unless they are the hairline variant; nothing is square-cornered.

**Borders.** 1px only, always `--hairline` #e0d8c6 or `--hairline-soft` #ece5d6 — warm-tinted to match the canvas, never a cool gray. Borders separate; they never decorate. No colored left-border accents.

**Transparency and blur.** Effectively unused. No frosted glass, no backdrop blur, no protection gradients over imagery (there is no imagery). The only opacity in the system is body copy inside a colored card, set to ~0.8 of the card's text color so the title stays dominant. Nothing is layered over anything else, so no scrims or capsules are needed.

**Hover, focus, press.** Hover darkens the fill by one step to its `-active` token (primary → `primary-active`, accent → `accent-active`); secondary and quiet buttons pick up a `surface-card` wash. Links darken and their hairline underline darkens with them. Focus is a 1px `--primary` border swap on inputs — no glow, no ring, no shadow. Press states do not scale, bounce or lift; the color step is the whole feedback. Disabled buttons are `primary-disabled` #e0d8c6 with `muted` text.

**Motion.** Minimal by design and formally out of scope in the brief. Where a transition is needed, use a 140ms ease color/opacity fade — no movement, no bounce, no spring, no parallax, no scroll-triggered reveals, no looping animation. If a build needs a motion spec, it needs a decision from the brand owner first.

**Fixed elements.** `TopNav` is sticky at 64px with a hairline bottom edge; nothing else is fixed, pinned or floating. No sticky CTAs, no cookie bars in the design, no floating chat bubble.

**The motif.** One decorative element: a large flat arc filled in `accent-mist` or `accent-stone`, behind the hero or as a section separator, **at most twice per page** (a thin curved rule above the footer is an acceptable second use). It is original flat SVG (`ArcMotif`), no stroke, no gradient, no shadow. No stock illustration, no 3D, no photography, no water graphics.

**Imagery color vibe.** No imagery is specified or supplied. If photography is ever introduced, it must be warm-toned, low-contrast, no cool blue cast, no grain overlay — and it must be *real* client or office photography, never stock, never water.

---

## Iconography

**No icon set was supplied.** The system uses **Lucide** (`lucide-static@0.469.0`, CDN) through `components/display/Icon.jsx`, which renders each glyph as a CSS mask so it inherits `currentColor` and therefore the correct text color on every card fill. This is a **flagged substitution** — Lucide's 1.5–2px stroke matches the hairline weight of the system, but if KHOV has a real icon set, drop it in `assets/icons/` and repoint `Icon`.

- **Style:** stroke icons only. No filled, duotone or multi-color sets. No brand-colored icons — an icon takes the text color of whatever it sits on.
- **Sizes:** 16px inside buttons, 18–20px in lists and contact rows, 24–26px as a feature-card lead icon. Never above 32px.
- **Vocabulary in use:** `server`, `cloud`, `shield-check`, `lock`, `database`, `users`, `check`, `phone`, `mail`, `map-pin`, `clock`, `file-text`, `activity`.
- **Emoji: never.** **Unicode as icons:** only the `→` in `TextLink`, the `✓` in `Checkbox`, the `▾` in `Select` and the em-dash bullet in `TierCard`.
- **Logo:** there is none. `Wordmark` sets "KHOV Group" in Fraunces 500 wherever a mark would go. Do not draw, reconstruct or approximate a logo.

---

## Substitutions and gaps

- **Fonts are hotlinked, not self-hosted.** No binaries were supplied, so `tokens/fonts.css` pulls Fraunces and Inter from Google Fonts. Both are OFL. Self-host into `assets/fonts/` before production and swap the `@import` for `@font-face` rules. Display face: the brief allowed Fraunces, Bricolage Grotesque or General Sans — **Fraunces was chosen** as the warmest fit for "calm and established".
- **Icons substituted** with Lucide (see above).
- **No logo, illustration or photography** exists in this system, by instruction.
- **Still open, from the brief:** dark mode is undefined (shell has no direct dark equivalent); chart colors are unordered (stone / aqua / dune / coral is the natural series); motion timing is out of scope; form validation beyond focus and error is unspecified.
