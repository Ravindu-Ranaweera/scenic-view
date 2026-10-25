import Image from "next/image";

import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SplitHeading } from "@/components/ui/SplitHeading/SplitHeading";
import { getDict } from "@/content/i18n";
import { hotel } from "@/content/hotel";
import { asset } from "@/lib/assets";
import type { Locale } from "@/lib/i18n";

import styles from "./About.module.css";

export function About({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);

  return (
    <Section id="about" className={styles.compact}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <Reveal variant="up">
            <Eyebrow centered>{t.about.eyebrow}</Eyebrow>
          </Reveal>

          <SplitHeading text={t.about.heading} />

          <Reveal variant="up" delay={160}>
            <div>
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={styles.lead}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

        </div>

        <div className={styles.figures}>
          <div className={styles.scrap}>
            <Reveal
              variant="up"
              className={`${styles.snap} ${styles.snapMain}`}
            >
              <span className={styles.tilt}>
                <Image
                  src={asset("/img/about-hotel.jpg")}
                  alt={`${hotel.name} seen from the air at dawn`}
                  width={1800}
                  height={1057}
                />
              </span>
            </Reveal>

            <Reveal
              variant="up"
              delay={220}
              className={`${styles.snap} ${styles.snapAerial}`}
            >
              <span className={styles.tilt}>
                <Image
                  src={asset("/img/about-view.jpg")}
                  alt={`${hotel.name} among the trees on the hillside`}
                  width={1800}
                  height={1013}
                />
              </span>
            </Reveal>

            <Reveal
              variant="up"
              delay={420}
              className={`${styles.snap} ${styles.snapBalcony}`}
            >
              <span className={styles.tilt}>
                <Image
                  src={asset("/img/view-04.jpg")}
                  alt="Balcony looking out towards the mountains"
                  width={400}
                  height={400}
                />
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
