import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { asset } from "@/lib/assets";

import styles from "./PageHero.module.css";

export type Crumb = { label: string; href?: string };

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  image: string;
  /** Omitted means decorative. Pass one when the photograph is of the
   *  property or the place, which is most of the time here. */
  imageAlt?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className={styles.hero}>
      <Image
        src={asset(`/img/${image}.jpg`)}
        alt={imageAlt ?? ""}
        fill
        priority
        sizes="100vw"
        className={styles.bg}
      />
      <Container>
        <div className={styles.inner}>
          <h1>{title}</h1>
          {subtitle && <p className={styles.sub}>{subtitle}</p>}
          <ol className={styles.crumbs}>
            {crumbs.map((crumb) => (
              <li key={crumb.label}>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  crumb.label
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
