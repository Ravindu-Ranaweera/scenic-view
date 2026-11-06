import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/hotel";
import { posts } from "@/content/posts";
import { rooms } from "@/content/rooms";
import { altLocales, locales } from "@/lib/i18n";

/** Static export emits this as a file, so the route must be forced static. */
export const dynamic = "force-static";

/**
 * The sitemap.
 *
 * Two things changed here beyond adding the new /rooms index.
 *
 * First, every translated URL now carries `alternates.languages`. A
 * hreflang set declared only in the page head is fine, but declaring it
 * in the sitemap as well is the form Google processes most reliably,
 * and it is the only place the relationship is stated once for the
 * whole set rather than repeated per page. Getting this wrong is how a
 * site ends up with Google serving its German page to English
 * searchers.
 *
 * Second, `lastModified` is no longer `new Date()` on every entry.
 * Stamping the whole sitemap with the build time tells a crawler that
 * all thirty-odd pages changed every time the site is deployed, which
 * is false, and a crawler that learns the signal is noise stops acting
 * on it. Articles now report their own date; the rest report the build.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const built = new Date();

  /** The hreflang set for a path that exists in all three languages. */
  const languages = (path: string) =>
    Object.fromEntries([
      ...locales.map((locale) => [
        locale,
        locale === "en" ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      ]),
      ["x-default", `${siteUrl}${path}`],
    ]) as Record<string, string>;

  /** One path in English plus its Russian and German twins. */
  const translated = (
    path: string,
    priority: number,
    changeFrequency: "monthly" | "weekly",
  ) => [
    {
      url: `${siteUrl}${path}`,
      lastModified: built,
      changeFrequency,
      priority,
      alternates: { languages: languages(path) },
    },
    ...altLocales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: built,
      changeFrequency,
      /* The translations are genuine pages, but English is the one we
         want served by default, so they sit a notch below it. */
      priority: Math.max(priority - 0.1, 0.1),
      alternates: { languages: languages(path) },
    })),
  ];

  return [
    ...translated("/", 1, "monthly"),
    ...translated("/rooms/", 0.9, "monthly"),
    ...rooms.flatMap((room) =>
      translated(`/rooms/${room.slug}/`, 0.8, "monthly"),
    ),

    /* The journal is English only, so no alternates here. */
    {
      url: `${siteUrl}/journal/`,
      lastModified: built,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/journal/${post.slug}/`,
      lastModified: new Date(post.updated ?? post.published),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
