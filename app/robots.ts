import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/hotel";

/** Static export emits this as a file, so the route must be forced static. */
export const dynamic = "force-static";

/**
 * robots.txt.
 *
 * Everything is open, which is right for a four-room hotel: there is
 * nothing here worth hiding and every blocked path is a page that
 * cannot rank.
 *
 * The AI crawlers are listed explicitly and allowed. For most
 * businesses that is a judgement call; for this one it is not. A
 * growing share of "where should I stay in Ella" now gets answered
 * inside an assistant rather than on a results page, and a hotel that
 * blocks those crawlers is absent from the answer. The FAQ block and
 * the guides exist precisely so there is something good to quote.
 *
 * To reverse that decision, change `allow` to `disallow` for the
 * second rule. The Google-Extended entry governs Gemini training only
 * and has no effect on ranking in Search either way.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
