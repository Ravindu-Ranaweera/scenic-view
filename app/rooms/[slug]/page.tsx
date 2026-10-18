import type { Metadata } from "next";
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
import { Container } from "@/components/ui/Container/Container";
import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Icon } from "@/components/ui/Icon/Icon";
import { hotel } from "@/content/hotel";
import { getRoom, otherRooms, rooms } from "@/content/rooms";
import { cancellationPolicy, houseRules, pageHeroImage } from "@/content/site";
import { asset } from "@/lib/assets";

import styles from "./page.module.css";

type Params = { slug: string };

/** One static page per room at build time. Adding a room to rooms.ts adds a page. */
export function generateStaticParams(): Params[] {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};

  return {
    title: room.name,
    description: `${room.tagline} ${room.name} at ${hotel.name}, a boutique hotel above Ella, Sri Lanka.`,
    openGraph: {
      title: `${room.name} | ${hotel.name}`,
      description: room.tagline,
      images: [`/img/${room.images[0]}.jpg`],
    },
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const room = getRoom(slug);

  if (!room) notFound();

  return (
    <>
      <PageHero
        title={room.name}
        subtitle={room.tagline}
        image={pageHeroImage}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Rooms", href: "/#rooms" },
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
                  {hotel.rating} &middot; {hotel.reviewCount} reviews
                </span>
              </div>
            </div>

            <MetaGrid room={room} />

            <RoomBlock title="About this room">
              <p>{room.intro}</p>
              <p>{room.detail}</p>
            </RoomBlock>

            <RoomBlock title="In the room">
              <ul className={roomBlockStyles.amenities}>
                {room.amenities.map((amenity) => (
                  <li key={amenity.label}>
                    <Icon name={amenity.icon} />
                    {amenity.label}
                  </li>
                ))}
              </ul>
            </RoomBlock>

            <RoomBlock title="House rules">
              <ul className={roomBlockStyles.checkList}>
                {houseRules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </RoomBlock>

            <RoomBlock title="Cancellation">
              <div className={roomBlockStyles.policy}>
                {/* TO CONFIRM: replace with your real policy before publishing. */}
                <p>{cancellationPolicy}</p>
                <p>
                  Booking direct with us? Tell us as soon as you know and we
                  will do what we can.
                </p>
              </div>
            </RoomBlock>

            <RoomBlock title="More of this room">
              <div className={roomBlockStyles.photoGrid}>
                {room.images.slice(1).map((image, index) => (
                  <Image
                    key={image}
                    src={asset(`/img/${image}.jpg`)}
                    alt={`${room.name}, photo ${index + 2}`}
                    width={800}
                    height={600}
                  />
                ))}
              </div>
            </RoomBlock>
          </div>

          <aside>
            <BookingWidget room={room} />
          </aside>
        </div>

        <OtherRooms rooms={otherRooms(room.slug)} />
      </Container>
    </>
  );
}
