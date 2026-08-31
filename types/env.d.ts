// Cloudflare secrets/vars this app reads via getCloudflareContext().env.
// Not auto-generated (RESEND_API_KEY is a Secrets Store binding, not a
// wrangler.jsonc binding), so it's declared here by hand. In production
// it's a Secrets Store binding (value read via an async get() call); in
// local dev via .dev.vars it's just a plain string — both are accepted,
// see lib/resend.ts's resolveSecret().
declare global {
  interface CloudflareEnv {
    RESEND_API_KEY?: string | { get(): Promise<string> };
  }
}

export {};
