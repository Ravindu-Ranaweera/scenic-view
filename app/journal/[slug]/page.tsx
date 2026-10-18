import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostBody } from "@/components/journal/PostBody/PostBody";
import { PostCard } from "@/components/journal/PostCard/PostCard";
import { PageHero } from "@/components/room/PageHero/PageHero";
import { ButtonLink } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { hotel, siteUrl, telHref } from "@/content/hotel";
import { getPost, otherPosts, posts } from "@/content/posts";
import { rooms } from "@/content/rooms";

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
    alternates: { canonical: `${siteUrl}/journal/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.excerpt,
      url: `${siteUrl}/journal/${post.slug}/`,
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

  /* Article structured data, so the piece can be eligible for rich results. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}/img/${post.image}.jpg`,
    author: { "@type": "Organization", name: hotel.name },
    publisher: {
      "@type": "Organization",
      name: hotel.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: hotel.street,
        addressLocality: hotel.town,
        postalCode: hotel.postcode,
        addressCountry: "LK",
      },
      telephone: hotel.phone,
      email: hotel.email,
    },
    mainEntityOfPage: `${siteUrl}/journal/${post.slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Serialised from our own typed content, not user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/journal" },
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
