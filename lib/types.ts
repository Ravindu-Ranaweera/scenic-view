/** Shared content types. Everything the pages render is typed through here. */

export type Hotel = {
  name: string;
  shortName: string;
  location: string;
  tagline: string;
  roomCount: number;
  street: string;
  town: string;
  postcode: string;
  /** Values still to be confirmed by the owner are wrapped in [brackets]. */
  rating: string;
  reviewCount: string;
  checkIn: string;
  checkOut: string;
  breakfast: string;
  address: string;
  phone: string;
  /** International format, digits only — used to build wa.me links. */
  whatsapp: string;
  email: string;
  social: { label: string; href: string; icon: string }[];
};

export type Room = {
  slug: string;
  name: string;
  /** Exact wording on the Booking.com listing, so the two can be matched. */
  bookingName: string;
  badge: string;
  tagline: string;
  /** null until the owner confirms a rate; the UI renders a placeholder. */
  priceLKR: number | null;
  /** Taxes and fees on top of the nightly rate. */
  taxesLKR: number | null;
  guests: number;
  beds: string;
  bathroom: string;
  outlook: string;
  outlookIcon: string;
  size: string;
  /** First entry is the lead image. All are image ids under /img. */
  images: string[];
  intro: string;
  detail: string;
  /** Shown on the home page card. */
  cardMeta: { icon: string; label: string }[];
  /** Differs by room: the 22 m² double has no air conditioning. */
  amenities: Amenity[];
};

export type Facility = {
  icon: string;
  title: string;
  body: string;
};

export type NearbyPlace = {
  icon: string;
  name: string;
  distance: string;
  body: string;
};

export type CollageTile = {
  /** Image id under /img. */
  src: string;
  alt: string;
  /** Crop to match the photograph's own orientation. */
  shape: "portrait" | "landscape";
};

export type Testimonial = {
  quote: string;
  name: string;
  country: string;
  /** ISO code; resolves to /img/flags/<code>.svg */
  countryCode: string;
  /** Already formatted for display, e.g. "14 September 2026". */
  date: string;
  /** Image id under /img. */
  image: string;
};

export type GalleryTile = {
  src: string;
  alt: string;
  /** Grid area a-i, matching the template in Gallery.module.css. */
  area: string;
};

export type Amenity = {
  icon: string;
  label: string;
};

export type Extra = {
  label: string;
  price: string;
};

/** A block of article body copy. Structured, never raw HTML. */
export type PostBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  /** The <title> tag; usually the title plus the brand. */
  seoTitle: string;
  /** Doubles as the meta description and the card summary. */
  excerpt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Image id under /img. */
  image: string;
  readingMinutes: number;
  blocks: PostBlock[];
};
