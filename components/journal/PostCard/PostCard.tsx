import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon/Icon";
import type { Post } from "@/lib/types";
import { asset } from "@/lib/assets";

import styles from "./PostCard.module.css";

export function PostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  return (
    <article
      className={featured ? `${styles.card} ${styles.featured}` : styles.card}
    >
      <div className={styles.media}>
        <Image
          src={asset(`/img/${post.image}.jpg`)}
          alt=""
          width={featured ? 1000 : 800}
          height={featured ? 800 : 500}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span>Guide</span>
          <span className={styles.dot} />
          <span>{post.readingMinutes} min read</span>
        </div>

        <h3>
          <Link href={`/journal/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className={styles.excerpt}>{post.excerpt}</p>

        <span className={styles.cue}>
          Read <Icon name="fa-solid fa-arrow-right" />
        </span>
      </div>
    </article>
  );
}
