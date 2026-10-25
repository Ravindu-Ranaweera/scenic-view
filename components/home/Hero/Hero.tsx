import Image from "next/image";

import { CheckAvailability } from "@/components/home/CheckAvailability/CheckAvailability";
import { ButtonLink } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading/SplitHeading";
import { getDict, getRooms } from "@/content/i18n";
import { hotel } from "@/content/hotel";
import { heroImage } from "@/content/site";
import { asset } from "@/lib/assets";
import { localeHref, type Locale } from "@/lib/i18n";

import styles from "./Hero.module.css";

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);
  const stats = [
    { num: String(hotel.roomCount), label: t.hero.statRooms },
    { num: String(getRooms(locale).length), label: t.hero.statTypes },
    { num: hotel.rating, label: t.hero.statRating },
  ];

  return (
    <section className={styles.hero} id="top">
      <div className={styles.frame}>
        <Image
          src={asset(`/img/${heroImage}.jpg`)}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bg}
        />
        <div className={styles.scrim} />
      </div>

      <Container>
        <div className={styles.inner}>
          <SplitHeading
            as="h1"
            text={t.hero.heading}
            className={styles.title}
            step={80}
          />

          <div className={styles.foot}>
            <Reveal variant="up" delay={520}>
              <p className={styles.sub}>{t.hero.tagline}</p>
            </Reveal>

            <Reveal variant="up" delay={640}>
              <div className={styles.actions}>
                <CheckAvailability locale={locale} />
                <ButtonLink
                  href={localeHref(locale, "/#rooms")}
                  variant="outlineLight"
                >
                  {t.hero.viewRooms}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal variant="up" delay={760}>
            <div className={styles.rail}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={`${styles.statNum} u-lining`}>
                    {stat.num}
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
              <span className={styles.cue}>
                <span className={styles.cueLine} aria-hidden="true" />
                Scroll
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
