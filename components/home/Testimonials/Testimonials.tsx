import Image from "next/image";

import { Rail } from "@/components/shared/Rail/Rail";
import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionHead } from "@/components/ui/SectionHead/SectionHead";
import { getDict } from "@/content/i18n";
import { testimonials } from "@/content/site";
import { asset } from "@/lib/assets";
import type { Locale } from "@/lib/i18n";
import { aggregateRating } from "@/lib/seo";

import { ReviewQuote } from "./ReviewQuote";
import styles from "./Testimonials.module.css";

export function Testimonials({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);

  /* The same figures the home page emits as aggregateRating.
     Google will only show a review snippet when the aggregate is
     visible to the visitor on the page that declares it, so this
     summary is a requirement rather than decoration. Both come from
     one function, so they cannot disagree. */
  const summary = aggregateRating();

  return (
    <Section id="reviews">
      <SectionHead
        eyebrow={t.reviews.eyebrow}
        title={t.reviews.heading}
        centered
      />

      <p className={styles.summary}>
        <span className={styles.score}>{summary.ratingValue}</span>
        <span className={styles.outOf}>/ {summary.bestRating}</span>
        <span className={styles.count}>
          {summary.reviewCount} {t.reviews.countedWord}
        </span>
      </p>

      <div className={styles.wrap}>
        <span className={styles.glyph} aria-hidden="true">
          &ldquo;
        </span>
        <Rail label={t.reviews.eyebrow} perView={3}>
          {testimonials.map((item, index) => {
            const rating = item.rating ?? 5;
            const full = Math.floor(rating);
            const half = rating % 1 >= 0.5;

            return (
              <Reveal key={index} variant="up" delay={(index % 3) * 120}>
                <figure className={styles.card}>
                  <div
                    className={styles.stars}
                    aria-label={`${rating} out of five`}
                  >
                    {Array.from({ length: full }, (_, i) => (
                      <Icon key={i} name="fa-solid fa-star" />
                    ))}
                    {half && <Icon name="fa-solid fa-star-half-stroke" />}
                  </div>

                  <ReviewQuote
                    quote={item.quote}
                    readMore={t.reviews.readMore}
                    readLess={t.reviews.readLess}
                  />

                  <figcaption className={styles.author}>
                    <span className={styles.avatar}>
                      {item.image ? (
                        /* Decorative: the name beside it carries the meaning. */
                        <Image
                          src={asset(`/img/${item.image}.jpg`)}
                          alt=""
                          width={180}
                          height={180}
                        />
                      ) : (
                        <span className={styles.initial} aria-hidden="true">
                          {item.name.charAt(0)}
                        </span>
                      )}
                    </span>
                    <span>
                      <strong>{item.name}</strong>
                      <span className={styles.meta}>
                        {/* A real flag image: emoji flags do not render on Windows. */}
                        <Image
                          className={styles.flag}
                          src={asset(`/img/flags/${item.countryCode}.svg`)}
                          alt=""
                          width={18}
                          height={12}
                        />
                        {item.country}
                      </span>
                      <span className={styles.date}>{item.date}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </Rail>
      </div>
    </Section>
  );
}
