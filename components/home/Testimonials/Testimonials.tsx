import Image from "next/image";

import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionHead } from "@/components/ui/SectionHead/SectionHead";
import { testimonials } from "@/content/site";
import { asset } from "@/lib/assets";

import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <Section id="reviews">
      <SectionHead
        eyebrow="Guest Book"
        title="What people write afterwards."
        centered
      />

      <div className={styles.wrap}>
        <span className={styles.glyph} aria-hidden="true">
          &ldquo;
        </span>
        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <Reveal key={index} variant="up" delay={index * 120}>
              <figure className={styles.card}>
                <div className={styles.stars} aria-label="Five out of five">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon key={i} name="fa-solid fa-star" />
                  ))}
                </div>

                <blockquote className={styles.quote}>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <figcaption className={styles.author}>
                  <span className={styles.avatar}>
                    {/* Decorative: the name beside it carries the meaning. */}
                    <Image
                      src={asset(`/img/${item.image}.jpg`)}
                      alt=""
                      width={180}
                      height={180}
                    />
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
          ))}
        </div>
      </div>
    </Section>
  );
}
