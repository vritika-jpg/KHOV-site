# Project Specs — KHOV Group Website

## What it is
A marketing website for KHOV Group, an AI consulting firm serving DC-area (DMV) small and mid-size businesses. Built from the Claude Design mockup `KHOV Website.dc.html`. No logins, no user accounts — every page is public.

## Who uses it
Prospective clients researching KHOV Group's services, browsing the team, and submitting a contact request.

## Tech stack
- **Language:** TypeScript
- **Framework:** Next.js (latest, App Router)
- **Styling:** Tailwind CSS, configured with the design system's tokens (colors, fonts, spacing, radius) pulled from the `_ds` folder so the site matches the mockup exactly
- **Backend:** none needed yet. No Supabase/database/auth — this is a static content site with one contact form.
- **Hosting:** Vercel (per claude.md default)
- **Fonts:** Fraunces (display) + Inter (body), loaded via `next/font/google` instead of a runtime CSS `@import` (faster, no layout shift)

This deviates from claude.md's default stack (which assumes Supabase/auth/candidate flows) because this project has no data to persist and no users to authenticate — just content pages and a contact form.

## Pages
- `/` — Home: hero, "What we do" (5 services as cards), "How we work" (3-step process), CTA band
- `/services` — Services: full list of 5 offerings with descriptions
- `/team` — Team: 4 founders (Megan Huber, Khadidiatou Dia, Vritika Narra, O.J. Idogun) with placeholder photos — no real photos were supplied in the design file, so I'll use a neutral placeholder tile with initials instead of a broken image
- `/contact` — Contact: page copy + a form (name, company, email, message)

Shared across all pages: top nav (Home/Services/Team + Contact button) and footer.

## Data & storage
- No database. Page content is hardcoded (matches the design file's copy).
- Contact form: submits to a Next.js API route (`/app/api/contact/route.ts`) that validates the fields and returns success/error. It does **not** send an email or store anything yet, since no email service or database was specified — it logs the submission server-side. Easy to wire up to Resend/Supabase/etc. later when you have that decided.

## Third-party services
None currently configured (no Stripe, no Supabase, no email provider). Google Fonts (Fraunces, Inter) via `next/font`.

## Scope notes
- Animations from the design file are intentionally skipped per your instruction (e.g., the letter-by-letter wordmark hover effect, hover-driven letter highlighting on the team page). The wordmark renders as static text.
- The design's single-page client-side view-switcher (`state.page`) is replaced with real Next.js routes (`/`, `/services`, `/team`, `/contact`) — that's the idiomatic Next.js way to do multi-page navigation instead of one giant client component swapping views in memory.
- Decorative arc SVG motif, cards, buttons, nav, footer, and form fields are rebuilt as small reusable React components under `/components`, styled to match the design tokens (not copy-pasted from the design tool's proprietary `x-import` markup, which only works inside the Claude Design canvas runtime).

## What "done" looks like
- `npm run build` completes with no TypeScript/build errors
- `npm run dev` runs with no console errors
- All 4 pages render and match the design's layout, colors, type, and spacing
- Nav + footer work on every page; mobile menu works at narrow widths
- Contact form shows a success message on submit and a clear error if fields are missing
