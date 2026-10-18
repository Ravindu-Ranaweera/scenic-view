import type { NextConfig } from "next";

/**
 * GitHub Pages serves a project site from a sub-path, so the build needs
 * to know about it. Set NEXT_PUBLIC_BASE_PATH=/scenic-view in CI; leaving
 * it empty keeps `next dev` and a root-domain deploy working unchanged.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  /**
   * Static export: `next build` writes plain HTML/CSS/JS to out/, which
   * deploys to any host. No Node server at runtime.
   */
  output: "export",

  /** Directory-style URLs (/rooms/x/) so plain file hosts serve them. */
  trailingSlash: true,

  basePath,

  images: {
    /** The optimiser needs a server; images are pre-sized by tools/prepare-images.py. */
    unoptimized: true,
  },
};

export default nextConfig;
