import type { Extra, Room } from "@/lib/types";

/**
 * The five room types, taken from the hotel's own Booking.com listing.
 *
 * Booking lists two of them under the identical name "Double Room with
 * Mountain View" (22 m² and 28 m²). They are named apart here so a guest
 * can tell which is which; `bookingName` keeps Booking's exact wording so
 * the two listings can still be matched up.
 *
 * Rates are the nightly prices shown for a single night in late October
 * 2026 and exclude taxes. Booking prices move with demand, so TO CONFIRM:
 * replace these with your own standard direct rates.
 *
 * Note: every room sleeps two. There is no family room and nothing here
 * sleeps four.
 */
export const rooms: Room[] = [
  {
    slug: "mountain-view-double",
    bookingName: "Double Room with Mountain View",
    name: "Mountain View Double",
    badge: "Best value",
    tagline: "A queen bed, a balcony, and the valley straight in front of it.",
    priceLKR: 16565,
    taxesLKR: 2982,
    guests: 2,
    beds: "1 Queen",
    bathroom: "Private",
    outlook: "Mountain view",
    outlookIcon: "fa-solid fa-mountain-sun",
    size: "22 m²",
    images: ["comfort-03", "comfort-01", "comfort-02", "comfort-04"],
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
    slug: "mountain-view-king",
    bookingName: "Double Room with Mountain View (28 m²)",
    name: "Mountain View King",
    badge: "King bed",
    tagline: "The same view, a king bed, and air conditioning.",
    priceLKR: 17890,
    taxesLKR: 3220,
    guests: 2,
    beds: "1 King",
    bathroom: "Private",
    outlook: "Mountain view",
    outlookIcon: "fa-solid fa-mountain-sun",
    size: "28 m²",
    images: ["deluxe-01", "deluxe-02", "deluxe-05"],
    intro:
      "Six square metres more than the 22 m² double, a king bed instead of a queen, and air conditioning for the warmer months. The balcony looks the same way down the valley.",
    detail:
      "Air conditioning, a flat-screen television, and a private bathroom with a hot shower. If you are staying more than a night, the extra floor space earns itself.",
    cardMeta: [
      { icon: "fa-solid fa-bed", label: "1 King" },
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
    slug: "mountain-view-twin",
    bookingName: "Twin Room with Mountain View",
    name: "Mountain View Twin",
    badge: "Twin beds",
    tagline: "Two full beds, a balcony, and a table to sit at.",
    priceLKR: 19878,
    taxesLKR: 3578,
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
    priceLKR: 21534,
    taxesLKR: 3876,
    guests: 2,
    beds: "1 King",
    bathroom: "Private",
    outlook: "Mountain view",
    outlookIcon: "fa-solid fa-mountain-sun",
    size: "28 m²",
    images: ["deluxe-03", "deluxe-04"],
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
    slug: "mountain-view-double-twin",
    bookingName: "Double or Twin Room with Mountain View",
    name: "Mountain View Double or Twin",
    badge: "Largest",
    tagline: "Our largest room, with two queen beds and space to spread out.",
    priceLKR: 23191,
    taxesLKR: 4174,
    guests: 2,
    beds: "2 Queen",
    bathroom: "Private",
    outlook: "Mountain view",
    outlookIcon: "fa-solid fa-mountain-sun",
    size: "33 m²",
    images: ["family-03", "family-02", "family-04", "family-01"],
    intro:
      "Thirty-three square metres and two queen beds, so it works either as a generous double or as a twin. Tell us which you would like and we will make it up that way.",
    detail:
      "Air conditioning, a writing desk, and balcony doors onto the same view as every other room in the house. It still sleeps two.",
    cardMeta: [
      { icon: "fa-solid fa-bed", label: "2 Queen" },
      { icon: "fa-solid fa-user-group", label: "2 Guests" },
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
