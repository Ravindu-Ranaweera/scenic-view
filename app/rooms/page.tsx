import type { Metadata } from "next";

import { RoomsIndexContent } from "@/components/pages/RoomsIndexContent";
import { getDict } from "@/content/i18n";

const t = getDict("en");

export const metadata: Metadata = {
  title: t.roomsIndex.title,
  description: t.roomsIndex.description,
  alternates: {
    canonical: "/rooms",
    languages: {
      en: "/rooms",
      ru: "/ru/rooms",
      de: "/de/rooms",
      "x-default": "/rooms",
    },
  },
  openGraph: {
    title: `${t.roomsIndex.title} | Scenic View Ella`,
    description: t.roomsIndex.description,
    images: ["/img/deluxe-03.jpg"],
  },
};

export default function RoomsIndexPage() {
  return <RoomsIndexContent locale="en" />;
}
