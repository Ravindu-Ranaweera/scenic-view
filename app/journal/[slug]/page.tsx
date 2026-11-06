import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostBody } from "@/components/journal/PostBody/PostBody";
import { PostCard } from "@/components/journal/PostCard/PostCard";
import { PageHero } from "@/components/room/PageHero/PageHero";
import { ButtonLink } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { hotel, telHref } from "@/content/hotel";
import { getPost, otherPosts, posts } from "@/content/posts";
import { rooms } from "@/content/rooms";
import { abs, articleSchema, breadcrumbSchema, graph } from "@/lib/seo";

import styles from "./page.module.css";

type Params = { slug: string };

/** One static page per article. Adding a post to posts.ts adds a page. */
export function generateStaticParams(): Params[] {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.excerpt,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: { canonical: abs(`/journal/${post.slug}/`) },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.excerpt,
      url: abs(`/journal/${post.slug}/`),
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: [hotel.name],
      images: [`/img/${post.image}.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.excerpt,
      images: [`/img/${post.image}.jpg`],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  /* Shown in the breadcrumb strip. Structured data that claims a
     publication date the reader cannot see is exactly the kind of
     mismatch that costs a rich result, so the date goes on the page. */
  const publishedLabel = new Date(
    post.updated ?? post.published,
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  /* The article, the trail to it, and a reference back to the hotel
     that publishes it. Linking the three means a crawler reading a
     guide to the Nine Arch Bridge also learns which business wrote it
     and where that business is, which is how a small hotel earns
     topical authority for its own area. */
  const jsonLd = graph(
    articleSchema(post),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Journal", path: "/journal/" },
      { name: post.title, path: `/journal/${post.slug}/` },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/journal" },
          { label: publishedLabel },
          { label: `${post.readingMinutes} min read` },
        ]}
      />

      <Container>
        <div className={styles.layout}>
          <article>
            <PostBody blocks={post.blocks} />
          </article>

          <aside className={styles.aside}>
            <div className={`${styles.panel} ${styles.stayPanel}`}>
              <h2>Where to stay</h2>
              <p className={styles.stayName}>{hotel.name}</p>
              <p>
                {hotel.roomCount} rooms on the hillside above Ella, every one
                with a mountain outlook. {rooms.length} room types, breakfast
                included.
              </p>
              <ul className={styles.contacts}>
                <li>
                  <Icon name="fa-solid fa-location-dot" />
                  <span>{hotel.address}</span>
                </li>
                <li>
                  <Icon name="fa-solid fa-phone" />
                  <a href={telHref(hotel.phone)}>{hotel.phone}</a>
                </li>
                <li>
                  <Icon name="fa-solid fa-envelope" />
                  <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
                </li>
              </ul>
              <ButtonLink href="/#contact" block>
                Check availability
              </ButtonLink>
            </div>

            {/* Reference for whoever maintains the site — not guest-facing copy. */}
            <div className={styles.panel}>
              <h2>Topics</h2>
              <div className={styles.chips}>
                {[post.primaryKeyword, ...post.secondaryKeywords]
                  .filter(Boolean)
                  .map((keyword) => (
                    <span key={keyword} className={styles.chip}>
                      {keyword}
                    </span>
                  ))}
              </div>
            </div>
          </aside>
        </div>

        <div className={styles.next}>
          <h2>Read next</h2>
          <div className={styles.nextGrid}>
            {otherPosts(post.slug).map((other) => (
              <PostCard key={other.slug} post={other} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
