/**
 * Every piece of structured data the site emits, built in one place.
 *
 * Why it is centralised: schema.org fragments scattered through page
 * components drift apart, and the fastest way to lose a rich result is
 * to have the home page claim one rating and a room page claim another.
 * Each builder here reads the same typed content the pages render, so
 * the markup and the visible page cannot disagree.
 *
 * Everything is linked by @id into one graph. Google follows those
 * references, which is how the Hotel, its reviews, its rooms and the
 * site itself are understood as one entity rather than four unrelated
 * blobs on separate URLs.
 */
import { bookingUrl, hotel, siteUrl } from "@/content/hotel";
import { faqs, facilities, heroImage, testimonials } from "@/content/site";
import type { Faq, Post, Room, Testimonial } from "@/lib/types";
import type { Locale } from "@/lib/i18n";

/** A site path turned into the absolute URL Google needs in markup. */
export const abs = (path: string) =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

/** An image id under /img turned into an absolute URL. */
export const imageUrl = (id: string) => abs(`/img/${id}.jpg`);

/* Stable node ids. Relative fragments would be ambiguous across pages,
   so each one is anchored to the absolute site URL. */
export const HOTEL_ID = `${siteUrl}/#hotel`;
export const SITE_ID = `${siteUrl}/#website`;
export const ORG_ID = `${siteUrl}/#organization`;

/** Reviews carry a 5-point score; an omitted `rating` means five stars. */
const scoreOf = (review: Testimonial) => review.rating ?? 5;

/**
 * The aggregate rating, computed from the reviews actually published on
 * the site rather than typed in by hand.
 *
 * This matters more than it looks. Google's review-snippet policy
 * requires the aggregate to come from reviews the site itself collects
 * and displays. Deriving it means the count and the average update
 * themselves when a review is added, and can never overstate what a
 * visitor can see on the page.
 */
export const aggregateRating = () => {
  const total = testimonials.reduce((sum, r) => sum + scoreOf(r), 0);
  return {
    "@type": "AggregateRating" as const,
    ratingValue: Number((total / testimonials.length).toFixed(2)),
    reviewCount: testimonials.length,
    bestRating: 5,
    worstRating: 1,
  };
};

/** Review nodes, capped so the payload stays a sensible size. */
const reviewNodes = (limit = 8) =>
  testimonials.slice(0, limit).map((review) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: scoreOf(review),
      bestRating: 5,
      worstRating: 1,
    },
    author: { "@type": "Person", name: review.name },
    reviewBody: review.quote,
    datePublished: review.date,
  }));

/** Facilities expressed the way Google reads hotel amenities. */
const amenityNodes = () =>
  facilities.map((facility) => ({
    "@type": "LocationFeatureSpecification",
    name: facility.title,
    value: true,
  }));

export const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: hotel.street,
  addressLocality: hotel.town,
  addressRegion: "Uva Province",
  postalCode: hotel.postcode,
  addressCountry: "LK",
});

/**
 * The hotel itself.
 *
 * Typed as both Hotel and LodgingBusiness: the first is what Google's
 * hotel features key off, the second is the LocalBusiness branch that
 * drives the map pack. Declaring both costs nothing and covers either
 * interpretation.
 */
export const hotelSchema = (locale: Locale, description: string) => ({
  "@type": ["Hotel", "LodgingBusiness"],
  "@id": HOTEL_ID,
  name: hotel.name,
  alternateName: `${hotel.name}, ${hotel.location}`,
  description,
  url: siteUrl,
  inLanguage: locale,
  image: [
    imageUrl(heroImage),
    imageUrl("view-01"),
    imageUrl("deluxe-01"),
    imageUrl("sunrise-01"),
  ],
  logo: abs("/img/logo-white.png"),
  telephone: hotel.phone,
  email: hotel.email,
  address: postalAddress(),
  geo: {
    "@type": "GeoCoordinates",
    latitude: hotel.geo.latitude,
    longitude: hotel.geo.longitude,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${hotel.geo.latitude},${hotel.geo.longitude}`,
  numberOfRooms: hotel.roomCount,
  petsAllowed: false,
  smokingAllowed: false,
  checkinTime: hotel.checkIn,
  checkoutTime: hotel.checkOut,
  currenciesAccepted: "LKR",
  paymentAccepted: "Cash, Card on arrival",
  availableLanguage: ["en", "si", "ru", "de"],
  amenityFeature: amenityNodes(),
  aggregateRating: aggregateRating(),
  review: reviewNodes(),
  sameAs: [bookingUrl, ...hotel.social.map((s) => s.href)],
  /* The booking funnel, declared so an assistant or a rich result can
     surface a reserve action rather than only a link. */
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: abs("/#contact"),
      inLanguage: locale,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "LodgingReservation", name: `Stay at ${hotel.name}` },
  },
});

/** The publishing organisation behind the journal and the newsletter. */
export const organizationSchema = () => ({
  "@type": "Organization",
  "@id": ORG_ID,
  name: hotel.name,
  url: siteUrl,
  logo: { "@type": "ImageObject", url: abs("/img/logo-white.png") },
  email: hotel.email,
  telephone: hotel.phone,
  address: postalAddress(),
  sameAs: [bookingUrl, ...hotel.social.map((s) => s.href)],
});

export const websiteSchema = (locale: Locale) => ({
  "@type": "WebSite",
  "@id": SITE_ID,
  url: siteUrl,
  name: hotel.name,
  inLanguage: locale,
  publisher: { "@id": ORG_ID },
});

/**
 * One room type.
 *
 * HotelRoom alone has no price or availability, so it cannot win a
 * result on its own; pairing it with a reserve action that points at
 * the booking page is what makes it useful. Rates are deliberately not
 * published on this site, so nothing here claims a price.
 */
export const roomSchema = (room: Room, locale: Locale) => ({
  "@type": "HotelRoom",
  "@id": `${abs(`/rooms/${room.slug}/`)}#room`,
  name: room.name,
  description: `${room.tagline} ${room.intro}`,
  url: abs(`/rooms/${room.slug}/`),
  image: room.images.slice(0, 4).map(imageUrl),
  inLanguage: locale,
  bed: { "@type": "BedDetails", typeOfBed: room.beds },
  occupancy: {
    "@type": "QuantitativeValue",
    maxValue: room.guests,
    unitText: "guests",
  },
  floorSize: {
    "@type": "QuantitativeValue",
    value: Number.parseInt(room.size, 10),
    unitCode: "MTK",
  },
  amenityFeature: room.amenities.map((amenity) => ({
    "@type": "LocationFeatureSpecification",
    name: amenity.label,
    value: true,
  })),
  containedInPlace: { "@id": HOTEL_ID },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: bookingUrl,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
  },
});

/**
 * Breadcrumbs.
 *
 * Worth the few lines: this is what replaces the raw URL under the blue
 * link with a readable trail, which measurably lifts click-through on
 * deep pages like a single room or an article.
 */
export const breadcrumbSchema = (crumbs: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: abs(crumb.path),
  })),
});

export const faqSchema = (items: Faq[] = faqs) => ({
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

/** An ordered list of the room pages, for the rooms index. */
export const roomListSchema = (rooms: Room[]) => ({
  "@type": "ItemList",
  itemListElement: rooms.map((room, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: abs(`/rooms/${room.slug}/`),
    name: room.name,
  })),
});

export const articleSchema = (post: Post) => ({
  "@type": "Article",
  "@id": `${abs(`/journal/${post.slug}/`)}#article`,
  headline: post.title,
  description: post.excerpt,
  image: imageUrl(post.image),
  datePublished: post.published,
  dateModified: post.updated ?? post.published,
  wordCount: post.blocks.reduce(
    (count, block) =>
      count +
      (block.type === "ul" ? block.items.join(" ") : block.text).split(/\s+/)
        .length,
    0,
  ),
  about: { "@id": HOTEL_ID },
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  isPartOf: { "@id": SITE_ID },
  inLanguage: "en",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": abs(`/journal/${post.slug}/`),
  },
});

/** Wraps a set of nodes into the single @graph each page emits. */
export const graph = (...nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
