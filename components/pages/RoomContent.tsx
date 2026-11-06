import Image from "next/image";
import { notFound } from "next/navigation";

import { BookingWidget } from "@/components/room/BookingWidget/BookingWidget";
import { MetaGrid } from "@/components/room/MetaGrid/MetaGrid";
import { OtherRooms } from "@/components/room/OtherRooms/OtherRooms";
import { PageHero } from "@/components/room/PageHero/PageHero";
import {
  RoomBlock,
  roomBlockStyles,
} from "@/components/room/RoomBlock/RoomBlock";
import { RoomGallery } from "@/components/room/RoomGallery/RoomGallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container/Container";
import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Icon } from "@/components/ui/Icon/Icon";
import { getDict, getRoom, getRooms } from "@/content/i18n";
import { pageHeroImage } from "@/content/site";
import { asset } from "@/lib/assets";
import { roomImageAlt } from "@/lib/imageAlt";
import { localeHref, type Locale } from "@/lib/i18n";
import {
  aggregateRating,
  breadcrumbSchema,
  graph,
  roomSchema,
} from "@/lib/seo";

import styles from "@/app/rooms/[slug]/page.module.css";

/** One room's page in one language. Shared by /rooms/[slug] and
 *  /[locale]/rooms/[slug]. */
export function RoomContent({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const t = getDict(locale);
  const room = getRoom(locale, slug);

  if (!room) notFound();

  const others = getRooms(locale).filter((r) => r.slug !== slug);
  const rating = aggregateRating();

  /* The room itself plus the trail that leads to it. The breadcrumb is
     what turns the bare URL under the search result into
     "Home > Rooms > Deluxe Double with Balcony". */
  const jsonLd = graph(
    roomSchema(room, locale),
    breadcrumbSchema([
      { name: t.roomPage.home, path: localeHref(locale, "/") },
      { name: t.roomPage.rooms, path: localeHref(locale, "/rooms/") },
      { name: room.name, path: localeHref(locale, `/rooms/${slug}/`) },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        title={room.name}
        subtitle={room.tagline}
        image={pageHeroImage}
        crumbs={[
          { label: t.roomPage.home, href: localeHref(locale, "/") },
          { label: t.roomPage.rooms, href: localeHref(locale, "/rooms") },
          { label: room.name },
        ]}
      />

      <Container>
        <div className={styles.layout}>
          <div>
            <RoomGallery images={room.images} roomName={room.name} />

            {/* Deliberately no second <h1>: the page hero carries the room name. */}
            <div className={styles.head}>
              <div>
                <Eyebrow flush>{room.badge}</Eyebrow>
                <p>{room.tagline}</p>
              </div>
              <div className={styles.rating}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="fa-solid fa-star" />
                ))}
                <span className={styles.score}>
                  {/* Five stars are drawn beside this, so the number
                      beside them has to be on a five-point scale. It
                      used to print the Booking.com score out of ten,
                      which read as a 9.6 next to five stars and
                      disagreed with the rating in the markup. */}
                  {rating.ratingValue} &middot; {rating.reviewCount}{" "}
                  {t.roomPage.reviewsWord}
                </span>
              </div>
            </div>

            <MetaGrid room={room} locale={locale} />

            <RoomBlock title={t.roomPage.aboutRoom}>
              <p>{room.intro}</p>
              <p>{room.detail}</p>
            </RoomBlock>

            <RoomBlock title={t.roomPage.inRoom}>
              <ul className={roomBlockStyles.amenities}>
                {room.amenities.map((amenity) => (
                  <li key={amenity.label}>
                    <Icon name={amenity.icon} />
                    {amenity.label}
                  </li>
                ))}
              </ul>
            </RoomBlock>

            <RoomBlock title={t.roomPage.houseRulesTitle}>
              <ul className={roomBlockStyles.checkList}>
                {t.houseRules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </RoomBlock>

            <RoomBlock title={t.roomPage.cancellationTitle}>
              <div className={roomBlockStyles.policy}>
                {/* TO CONFIRM: replace with your real policy before publishing. */}
                <p>{t.cancellationPolicy}</p>
                <p>{t.roomPage.cancellationNote}</p>
              </div>
            </RoomBlock>

            <RoomBlock title={t.roomPage.morePhotos}>
              <div className={roomBlockStyles.photoGrid}>
                {room.images.slice(1).map((image) => (
                  <Image
                    key={image}
                    src={asset(`/img/${image}.jpg`)}
                    alt={roomImageAlt(image, room.name)}
                    width={800}
                    height={600}
                  />
                ))}
              </div>
            </RoomBlock>
          </div>

          <aside>
            <BookingWidget room={room} locale={locale} />
          </aside>
        </div>

        <OtherRooms rooms={others} locale={locale} />
      </Container>
    </>
  );
}
