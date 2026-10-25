import type { Metadata } from "next";

import { RoomContent } from "@/components/pages/RoomContent";
import { getRoom } from "@/content/i18n";
import { hotel } from "@/content/hotel";
import { rooms } from "@/content/rooms";
import { isLocale } from "@/lib/i18n";

type Params = { locale: string; slug: string };

/** The locale comes from the parent segment; this crosses it with the
 *  room slugs. */
export function generateStaticParams(): { slug: string }[] {
  return rooms.map((room) => ({ slug: room.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const room = getRoom(locale, slug);
  if (!room) return {};

  return {
    title: room.name,
    description: `${room.tagline} ${hotel.name}, Ella, Sri Lanka.`,
    alternates: {
      canonical: `/${locale}/rooms/${slug}`,
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

export default async function LocaleRoomPage({
  params,
}: PageProps<"/[locale]/rooms/[slug]">) {
  const { locale, slug } = await params;
  return <RoomContent slug={slug} locale={isLocale(locale) ? locale : "en"} />;
}
