import { About } from "@/components/home/About/About";
import { Contact } from "@/components/home/Contact/Contact";
import { Facilities } from "@/components/home/Facilities/Facilities";
import { Faq } from "@/components/home/Faq/Faq";
import { Gallery } from "@/components/home/Gallery/Gallery";
import { Hero } from "@/components/home/Hero/Hero";
import { Nearby } from "@/components/home/Nearby/Nearby";
import { RoomGrid } from "@/components/home/RoomGrid/RoomGrid";
import { Testimonials } from "@/components/home/Testimonials/Testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { getDict, getRooms } from "@/content/i18n";
import type { Locale } from "@/lib/i18n";
import {
  faqSchema,
  graph,
  hotelSchema,
  organizationSchema,
  roomListSchema,
  websiteSchema,
} from "@/lib/seo";

/** The home page in one language. Shared by / and /[locale]. */
export function HomeContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  /**
   * One graph for the page rather than four loose scripts. The Hotel,
   * the organisation behind it, the site, the room list and the FAQ all
   * cross-reference by @id, so a crawler reads them as facts about one
   * business instead of five unrelated objects that happen to share a
   * URL.
   */
  const jsonLd = graph(
    hotelSchema(locale, t.meta.description),
    organizationSchema(),
    websiteSchema(locale),
    roomListSchema(getRooms(locale)),
    faqSchema(t.faq.items),
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero locale={locale} />
      <About locale={locale} />
      <RoomGrid locale={locale} />
      <Facilities locale={locale} />
      <Nearby locale={locale} />
      <Testimonials locale={locale} />
      <Gallery locale={locale} />
      <Faq locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
