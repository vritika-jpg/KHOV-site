// Cloudflare secrets/vars this app reads via getCloudflareContext().env.
// Not auto-generated (RESEND_API_KEY is a dashboard secret, not a
// wrangler.jsonc binding), so it's declared here by hand.
declare global {
  interface CloudflareEnv {
    RESEND_API_KEY?: string;
  }
}

export {};
