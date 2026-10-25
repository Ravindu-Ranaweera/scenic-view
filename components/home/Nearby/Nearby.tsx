import Image from "next/image";

import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SplitHeading } from "@/components/ui/SplitHeading/SplitHeading";
import { getDict, getNearby } from "@/content/i18n";
import { nearbyCollage } from "@/content/site";
import { asset } from "@/lib/assets";
import type { Locale } from "@/lib/i18n";

import styles from "./Nearby.module.css";

export function Nearby({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);

  return (
    <Section id="nearby" tone="dark" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <Reveal variant="up">
            <Eyebrow onDark>{t.nearby.eyebrow}</Eyebrow>
          </Reveal>

          <SplitHeading text={t.nearby.heading} />

          <Reveal variant="up" delay={140}>
            <p className={styles.intro}>{t.nearby.intro}</p>
          </Reveal>

          <ul className={styles.list}>
            {getNearby(locale).map((place, index) => (
              <Reveal
                key={place.name}
                as="li"
                variant="up"
                delay={index * 60}
                className={styles.item}
              >
                <span className={styles.num}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.body}>
                  <h3 className={styles.title}>
                    {place.name}
                    <span className={styles.dist}>{place.distance}</span>
                  </h3>
                  <p>{place.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className={styles.collage}>
          {nearbyCollage.map((tile, index) => (
            <Reveal
              key={tile.src}
              variant="mask"
              delay={index * 80}
              className={styles.tile}
            >
              <Image
                src={asset(`/img/${tile.src}.jpg`)}
                alt={tile.alt}
                width={700}
                height={700}
              />
              <span className={styles.caption}>{tile.alt}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
