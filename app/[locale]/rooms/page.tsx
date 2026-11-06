import type { Metadata } from "next";

import { RoomsIndexContent } from "@/components/pages/RoomsIndexContent";
import { hotel } from "@/content/hotel";
import { getDict } from "@/content/i18n";
import { isLocale } from "@/lib/i18n";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale);

  return {
    title: t.roomsIndex.title,
    description: t.roomsIndex.description,
    alternates: {
      canonical: `/${locale}/rooms`,
      languages: {
        en: "/rooms",
        ru: "/ru/rooms",
        de: "/de/rooms",
        "x-default": "/rooms",
      },
    },
    openGraph: {
      title: `${t.roomsIndex.title} | ${hotel.name}`,
      description: t.roomsIndex.description,
      images: ["/img/deluxe-03.jpg"],
    },
  };
}

export default async function LocaleRoomsIndexPage({
  params,
}: PageProps<"/[locale]/rooms">) {
  const { locale } = await params;
  return <RoomsIndexContent locale={isLocale(locale) ? locale : "en"} />;
}
