import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/hotel";
import { posts } from "@/content/posts";
import { rooms } from "@/content/rooms";

/** Emitted as a static sitemap.xml by the export. */
/** Static export emits this as a file, so the route must be forced static. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/journal/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...rooms.map((room) => ({
      url: `${siteUrl}/rooms/${room.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/journal/${post.slug}/`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
