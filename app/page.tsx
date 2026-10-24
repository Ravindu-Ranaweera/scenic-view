import { About } from "@/components/home/About/About";
import { Contact } from "@/components/home/Contact/Contact";
import { Facilities } from "@/components/home/Facilities/Facilities";
import { Gallery } from "@/components/home/Gallery/Gallery";
import { Hero } from "@/components/home/Hero/Hero";
import { Nearby } from "@/components/home/Nearby/Nearby";
import { RoomGrid } from "@/components/home/RoomGrid/RoomGrid";
import { Testimonials } from "@/components/home/Testimonials/Testimonials";
import { hotel, siteUrl } from "@/content/hotel";
import { heroImage } from "@/content/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    description: hotel.tagline,
    url: siteUrl,
    image: `${siteUrl}/img/${heroImage}.jpg`,
    telephone: hotel.phone,
    email: hotel.email,
    numberOfRooms: hotel.roomCount,
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
      <Hero />
      <About />
      <RoomGrid />
      <Facilities />
      <Nearby />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
