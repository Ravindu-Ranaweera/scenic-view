import { ButtonLink } from "@/components/ui/Button/Button";
import { Rail } from "@/components/shared/Rail/Rail";
import { RoomCard } from "@/components/shared/RoomCard/RoomCard";
import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { getDict, getRooms } from "@/content/i18n";
import { localeHref, type Locale } from "@/lib/i18n";

import styles from "./RoomGrid.module.css";

export function RoomGrid({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);

  return (
    <Section id="rooms" tone="mist">
      <div className={styles.head}>
        <div>
          <Eyebrow>{t.roomsSection.eyebrow}</Eyebrow>
          <h2>{t.roomsSection.heading}</h2>
        </div>
        <p>{t.roomsSection.blurb}</p>
      </div>

      <Rail label={t.roomsSection.eyebrow} perView={2}>
        {getRooms(locale).map((room, index) => (
          <Reveal key={room.slug} variant="up" delay={(index % 2) * 90}>
            <RoomCard room={room} locale={locale} />
          </Reveal>
        ))}
      </Rail>

      {/* The home page is where external links land, so it holds most
          of the site's authority. A plain link from here is how that
          authority reaches the rooms hub and, through it, the four
          room pages. */}
      <div className={styles.more}>
        <ButtonLink href={localeHref(locale, "/rooms")} variant="outlineInk">
          {t.hero.viewRooms}
        </ButtonLink>
      </div>
    </Section>
  );
}
