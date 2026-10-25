import Image from "next/image";

import { CheckAvailability } from "@/components/home/CheckAvailability/CheckAvailability";
import { ButtonLink } from "@/components/ui/Button/Button";
import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Icon } from "@/components/ui/Icon/Icon";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading/SplitHeading";
import { getDict } from "@/content/i18n";
import { heroImage } from "@/content/site";
import { asset } from "@/lib/assets";
import { localeHref, type Locale } from "@/lib/i18n";

import styles from "./Hero.module.css";

const featureIcons = [
  "fa-solid fa-binoculars",
  "fa-solid fa-mountain-sun",
  "fa-solid fa-hand-holding-heart",
  "fa-solid fa-utensils",
  "fa-solid fa-wifi",
];

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);

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
          <Reveal variant="up">
            <Eyebrow onDark>{t.hero.eyebrow}</Eyebrow>
          </Reveal>

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
              {t.hero.features.map((feature, index) => (
                <div key={feature} className={styles.feature}>
                  <Icon name={featureIcons[index] ?? "fa-solid fa-circle"} />
                  <span>{feature}</span>
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
