# KHOV Group Website

Marketing site for KHOV Group, built with Next.js (App Router), TypeScript, and Tailwind CSS. See `project_specs.md` for scope and `claude.md` for the project's working rules.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home
- `/services` — Services
- `/team` — Team
- `/contact` — Contact (form posts to `/api/contact`, which currently logs the submission — no email/database is wired up yet)

## Design source

The visual design (colors, type, spacing) was ported from the Claude Design mockup in `khov_source/`. The design tokens live in `app/globals.css`.

## Deploying

Deploy to [Vercel](https://vercel.com/new) — it detects Next.js automatically. No environment variables are required yet.
