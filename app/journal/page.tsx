import type { Metadata } from "next";

import { PostCard } from "@/components/journal/PostCard/PostCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/room/PageHero/PageHero";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { hotel } from "@/content/hotel";
import { posts } from "@/content/posts";
import { abs, breadcrumbSchema, graph, imageUrl } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ella Travel Guides",
  description:
    "Guides to Ella, Sri Lanka, written by the people who live here. Nine Arch Bridge, Little Adam's Peak, Ella Rock, the train and where to stay.",
  alternates: { canonical: "/journal" },
  openGraph: {
    type: "website",
    title: `Ella Travel Guides | ${hotel.name}`,
    description:
      "Practical guides to Ella, Sri Lanka, written by the people who live here.",
    url: abs("/journal/"),
    images: ["/img/blog/nine-arch-bridge.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Ella Travel Guides | ${hotel.name}`,
    description:
      "Practical guides to Ella, Sri Lanka, written by the people who live here.",
    images: ["/img/blog/nine-arch-bridge.jpg"],
  },
};

export default function JournalPage() {
  const [featured, ...rest] = posts;

  /* A Blog node listing every piece, so the ten guides are understood
     as one body of work on Ella rather than ten orphan pages. */
  const jsonLd = graph(
    {
      "@type": "Blog",
      "@id": `${abs("/journal/")}#blog`,
      name: `Ella Travel Guides | ${hotel.name}`,
      url: abs("/journal/"),
      inLanguage: "en",
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: abs(`/journal/${post.slug}/`),
        datePublished: post.published,
        dateModified: post.updated ?? post.published,
        image: imageUrl(post.image),
      })),
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Journal", path: "/journal/" },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        title="The Journal"
        subtitle="Guides to Ella written by the people who live on the hill above it. What to walk, when to go, and how to get there."
        image="blog/nine-arch-bridge"
        crumbs={[{ label: "Home", href: "/" }, { label: "Journal" }]}
      />

      <Section>
        <Reveal variant="up" className={styles.featured}>
          <PostCard post={featured} featured />
        </Reveal>

        <div className={styles.grid}>
          {rest.map((post, index) => (
            <Reveal key={post.slug} variant="up" delay={(index % 3) * 110}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
