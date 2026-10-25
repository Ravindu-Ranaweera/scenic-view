import { About } from "@/components/home/About/About";
import { Contact } from "@/components/home/Contact/Contact";
import { Facilities } from "@/components/home/Facilities/Facilities";
import { Gallery } from "@/components/home/Gallery/Gallery";
import { Hero } from "@/components/home/Hero/Hero";
import { Nearby } from "@/components/home/Nearby/Nearby";
import { RoomGrid } from "@/components/home/RoomGrid/RoomGrid";
import { Testimonials } from "@/components/home/Testimonials/Testimonials";
import { getDict } from "@/content/i18n";
import { hotel, siteUrl } from "@/content/hotel";
import { heroImage } from "@/content/site";
import type { Locale } from "@/lib/i18n";

/** The home page in one language. Shared by / and /[locale]. */
export function HomeContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    description: t.hero.tagline,
    url: siteUrl,
    image: `${siteUrl}/img/${heroImage}.jpg`,
    telephone: hotel.phone,
    email: hotel.email,
    numberOfRooms: hotel.roomCount,
    inLanguage: locale,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.street,
      addressLocality: hotel.town,
      postalCode: hotel.postcode,
      addressRegion: "Uva Province",
      addressCountry: "LK",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Serialised from our own typed content, not user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero locale={locale} />
      <About locale={locale} />
      <RoomGrid locale={locale} />
      <Facilities locale={locale} />
      <Nearby locale={locale} />
      <Testimonials locale={locale} />
      <Gallery locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
