import { PageHero } from "@/components/room/PageHero/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { RoomCard } from "@/components/shared/RoomCard/RoomCard";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { getDict, getRooms } from "@/content/i18n";
import { pageHeroImage } from "@/content/site";
import { localeHref, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, graph, roomListSchema } from "@/lib/seo";

import styles from "./RoomsIndexContent.module.css";

/**
 * The rooms index.
 *
 * Until now "rooms" existed only as `/#rooms`, an anchor on the home
 * page. A fragment is not a URL: it cannot rank on its own, cannot
 * carry its own title and description, and cannot be linked to by
 * anyone else as the rooms page. Searches like "rooms in Ella with a
 * balcony" or "mountain view hotel rooms Ella" had nothing specific to
 * land on.
 *
 * This gives them one, and gives the four room pages a hub that links
 * to all of them, which spreads link equity from the home page down to
 * the detail pages instead of leaving each one hanging off a card.
 */
export function RoomsIndexContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const rooms = getRooms(locale);

  const jsonLd = graph(
    roomListSchema(rooms),
    breadcrumbSchema([
      { name: t.roomPage.home, path: localeHref(locale, "/") },
      { name: t.roomPage.rooms, path: localeHref(locale, "/rooms/") },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        title={t.roomsIndex.heading}
        subtitle={t.roomsIndex.blurb}
        image={pageHeroImage}
        crumbs={[
          { label: t.roomPage.home, href: localeHref(locale, "/") },
          { label: t.roomPage.rooms },
        ]}
      />

      <Section>
        <div className={styles.grid}>
          {rooms.map((room, index) => (
            <Reveal key={room.slug} variant="up" delay={(index % 2) * 90}>
              <RoomCard room={room} locale={locale} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Container>
        <p className={styles.note}>{t.roomsSection.blurb}</p>
      </Container>
    </>
  );
}
