import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/hotel";

/** Static export emits this as a file, so the route must be forced static. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
