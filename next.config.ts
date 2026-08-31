import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Workers doesn't run Next's built-in image-optimization
  // server without extra setup (a paid Cloudflare Images plan or a custom
  // loader) — unoptimized keeps next/image working everywhere with zero
  // extra config, at the cost of not auto-resizing images server-side.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
