import type { Metadata } from "next";

import { HomeContent } from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { en: "/", ru: "/ru", de: "/de", "x-default": "/" },
  },
};

export default function HomePage() {
  return <HomeContent locale="en" />;
}
