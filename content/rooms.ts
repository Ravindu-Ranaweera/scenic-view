import type { Extra, Room } from "@/lib/types";

/**
 * The four room types, as confirmed by the owner. `bookingName` keeps
 * Booking.com's wording where a matching listing exists.
 *
 * Rates are deliberately not published. The owner asked for no prices
 * on the site, so priceLKR and taxesLKR stay null and nothing renders them.
 */
export const rooms: Room[] = [
  {
    slug: "mountain-view-twin",
    bookingName: "Twin Room with Mountain View",
    name: "Mountain View Twin",
    badge: "Twin beds",
    tagline: "Two full beds, a balcony, and a table to sit at.",
    priceLKR: null,
    taxesLKR: null,
    guests: 2,
    beds: "2 Full",
    bathroom: "Private",
    outlook: "Mountain view",
    outlookIcon: "fa-solid fa-mountain-sun",
    size: "28 m²",
    images: ["twin-03", "twin-01", "twin-02", "twin-04"],
    intro:
      "The same 28 m² and the same view, with two full beds rather than one large one. Our room for friends travelling together, or anyone who would rather not share a mattress.",
    detail:
      "Air conditioning, a seating area by the window, a wardrobe, and a private bathroom with a hot shower. The balcony doors open onto the same valley.",
    cardMeta: [
      { icon: "fa-solid fa-bed", label: "2 Full" },
      { icon: "fa-solid fa-user-group", label: "2 Guests" },
      { icon: "fa-solid fa-up-right-and-down-left-from-center", label: "28 m²" },
    ],
    amenities: [
      { icon: "fa-solid fa-mountain-sun", label: "Balcony and terrace" },
      { icon: "fa-solid fa-binoculars", label: "Mountain view" },
      { icon: "fa-solid fa-snowflake", label: "Air conditioning" },
      { icon: "fa-solid fa-shower", label: "Attached bathroom" },
      { icon: "fa-solid fa-tv", label: "Flat-screen TV" },
      { icon: "fa-solid fa-wifi", label: "Free Wi-Fi" },
      { icon: "fa-solid fa-utensils", label: "Continental breakfast" },
    ],
  },
  {
    slug: "deluxe-double-balcony",
    bookingName: "Deluxe Double Room with Balcony",
    name: "Deluxe Double with Balcony",
    badge: "Minibar",
    tagline: "A king bed, a minibar, and the best balcony in the house.",
    priceLKR: null,
    taxesLKR: null,
    guests: 2,
    beds: "1 King",
    bathroom: "Private",
    outlook: "Mountain view",
    outlookIcon: "fa-solid fa-mountain-sun",
    size: "28 m²",
    images: ["deluxe-03", "deluxe-07", "deluxe-06", "deluxe-04"],
    intro:
      "The room people write to us about afterwards. A king bed, a minibar, and full-height doors onto a balcony with two chairs and a table, looking straight down the valley.",
    detail:
      "On a clear morning the cloud sits below you and burns off while you have your tea. Air conditioning, a flat-screen television, and a private bathroom with a walk-in shower.",
    cardMeta: [
      { icon: "fa-solid fa-bed", label: "1 King" },
      { icon: "fa-solid fa-user-group", label: "2 Guests" },
      { icon: "fa-solid fa-up-right-and-down-left-from-center", label: "28 m²" },
    ],
    amenities: [
      { icon: "fa-solid fa-mountain-sun", label: "Balcony and terrace" },
      { icon: "fa-solid fa-binoculars", label: "Mountain view" },
      { icon: "fa-solid fa-snowflake", label: "Air conditioning" },
      { icon: "fa-solid fa-martini-glass", label: "Minibar" },
      { icon: "fa-solid fa-shower", label: "Attached bathroom" },
      { icon: "fa-solid fa-tv", label: "Flat-screen TV" },
      { icon: "fa-solid fa-wifi", label: "Free Wi-Fi" },
      { icon: "fa-solid fa-utensils", label: "Continental breakfast" },
    ],
  },
  {
    slug: "mountain-view-double",
    bookingName: "Double Room with Mountain View",
    name: "Mountain View Double",
    badge: "Best value",
    tagline: "A queen bed, a balcony, and the valley straight in front of it.",
    priceLKR: null,
    taxesLKR: null,
    guests: 2,
    beds: "1 Queen",
    bathroom: "Private",
    outlook: "Mountain view",
    outlookIcon: "fa-solid fa-mountain-sun",
    size: "22 m²",
    images: ["comfort-01", "comfort-03", "comfort-02", "comfort-04"],
    intro:
      "Our smallest and best-value room, and the one that goes first. A queen bed, a wardrobe, and a private bathroom with a hot shower, with the balcony doors opening onto the valley.",
    detail:
      "This is the one room without air conditioning. At this elevation the nights are cool enough that most guests never reach for it, but if you want it, take one of the 28 m² rooms instead.",
    cardMeta: [
      { icon: "fa-solid fa-bed", label: "1 Queen" },
      { icon: "fa-solid fa-user-group", label: "2 Guests" },
      { icon: "fa-solid fa-up-right-and-down-left-from-center", label: "22 m²" },
    ],
    amenities: [
      { icon: "fa-solid fa-mountain-sun", label: "Balcony and terrace" },
      { icon: "fa-solid fa-binoculars", label: "Mountain view" },
      { icon: "fa-solid fa-shower", label: "Attached bathroom" },
      { icon: "fa-solid fa-tv", label: "Flat-screen TV" },
      { icon: "fa-solid fa-wifi", label: "Free Wi-Fi" },
      { icon: "fa-solid fa-utensils", label: "Continental breakfast" },
    ],
  },
  {
    slug: "deluxe-family-room",
    bookingName: "Deluxe Family Room",
    name: "Deluxe Family Room",
    badge: "Largest",
    tagline: "Our largest room, with two queen beds and space for the family.",
    priceLKR: null,
    taxesLKR: null,
    guests: 4,
    beds: "2 Queen",
    bathroom: "Private",
    outlook: "Mountain view",
    outlookIcon: "fa-solid fa-mountain-sun",
    size: "33 m²",
    images: ["family-03", "family-02", "family-04", "family-01"],
    intro:
      "Thirty-three square metres and two queen beds, with room for a family of four to spread out. Tell us how you would like the beds made up and we will have it ready.",
    detail:
      "Air conditioning, a writing desk, and balcony doors onto the same view as every other room in the house.",
    cardMeta: [
      { icon: "fa-solid fa-bed", label: "2 Queen" },
      { icon: "fa-solid fa-user-group", label: "4 Guests" },
      { icon: "fa-solid fa-up-right-and-down-left-from-center", label: "33 m²" },
    ],
    amenities: [
      { icon: "fa-solid fa-mountain-sun", label: "Balcony and terrace" },
      { icon: "fa-solid fa-binoculars", label: "Mountain view" },
      { icon: "fa-solid fa-snowflake", label: "Air conditioning" },
      { icon: "fa-solid fa-shower", label: "Attached bathroom" },
      { icon: "fa-solid fa-tv", label: "Flat-screen TV" },
      { icon: "fa-solid fa-wifi", label: "Free Wi-Fi" },
      { icon: "fa-solid fa-utensils", label: "Continental breakfast" },
    ],
  },
];

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);

export const otherRooms = (slug: string) => rooms.filter((r) => r.slug !== slug);

/** Renders a rate, or a clearly-marked placeholder while one is missing. */
export const formatRate = (priceLKR: number | null) =>
  priceLKR === null ? "LKR [rate]" : `LKR ${priceLKR.toLocaleString("en-LK")}`;

/** The cheapest nightly rate, for "from" copy. */
export const lowestRate = () =>
  Math.min(...rooms.map((r) => r.priceLKR ?? Infinity));

/** No invented prices: these are real services, quoted on request. */
export const stayExtras: Extra[] = [
  { label: "Airport or Colombo transfer", price: "On request" },
  { label: "Dinner, cooked to order", price: "On request" },
  { label: "Guided walk or tuk-tuk hire", price: "On request" },
  { label: "Early breakfast before a sunrise walk", price: "Free" },
];
