import type { Metadata } from "next";

import { PostCard } from "@/components/journal/PostCard/PostCard";
import { PageHero } from "@/components/room/PageHero/PageHero";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { hotel } from "@/content/hotel";
import { posts } from "@/content/posts";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ella Travel Guides",
  description:
    "Guides to Ella, Sri Lanka from the team at Scenic View: Nine Arch Bridge, Little Adam's Peak, Ella Rock, the hill-country train, tea plantations and where to stay.",
  openGraph: {
    title: `Ella Travel Guides | ${hotel.name}`,
    description:
      "Practical guides to Ella, Sri Lanka, written by the people who live here.",
    images: ["/img/blog/nine-arch-bridge.jpg"],
  },
};

export default function JournalPage() {
  const [featured, ...rest] = posts;

  return (
    <>
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
