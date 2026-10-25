import type { Metadata } from "next";

import { RoomContent } from "@/components/pages/RoomContent";
import { hotel } from "@/content/hotel";
import { getRoom, rooms } from "@/content/rooms";

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
    alternates: {
      canonical: `/rooms/${slug}`,
      languages: {
        en: `/rooms/${slug}`,
        ru: `/ru/rooms/${slug}`,
        de: `/de/rooms/${slug}`,
        "x-default": `/rooms/${slug}`,
      },
    },
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
  return <RoomContent slug={slug} locale="en" />;
}
