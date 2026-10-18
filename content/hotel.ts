import type { Hotel } from "@/lib/types";

/**
 * Single source of truth for the hotel's own details.
 *
 * Anything in [square brackets] is still to be confirmed by the owner.
 * Search the repo for "[" to find everything outstanding.
 */
export const hotel: Hotel = {
  name: "Scenic View Ella",
  shortName: "Scenic View",
  location: "Ella, Sri Lanka",
  tagline:
    "A small hotel on the hillside above Ella, where every room opens onto the mountains and the morning arrives over a sea of cloud.",
  roomCount: 8,

  street: "12/A Mahamewnawa Road",
  town: "Kumbalwela, Ella",
  postcode: "90090",

  rating: "9.6",
  reviewCount: "[XX]",
  checkIn: "[14:00]",
  checkOut: "[11:00]",
  breakfast: "[07:00–10:00]",

  address: "12/A Mahamewnawa Road, Kumbalwela, Ella 90090, Sri Lanka",
  phone: "+94 71 630 0888",
  whatsapp: "94716300888",
  email: "scenicviewella@gmail.com",

  social: [
    { label: "Instagram", href: "#", icon: "fa-brands fa-instagram" },
    { label: "Facebook", href: "#", icon: "fa-brands fa-facebook-f" },
    { label: "TripAdvisor", href: "#", icon: "fa-brands fa-tripadvisor" },
    { label: "WhatsApp", href: "https://wa.me/94716300888", icon: "fa-brands fa-whatsapp" },
  ],
};

/**
 * The hotel's Booking.com page.
 *
 * Deliberately stripped back to the canonical URL. The link as copied from
 * a browser carried 15 query parameters, including a personal session id,
 * hard-coded arrival dates and search-result ids, all of which expire and
 * would send guests to a stale or broken page.
 */
export const bookingUrl = "https://www.booking.com/hotel/lk/scenic-view-ella.html";

/**
 * Absolute site URL, used for canonical tags, the sitemap and social
 * preview images. Overridden in CI; change the fallback when you move to
 * your own domain.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://ravindu-ranaweera.github.io/scenic-view";

/** Strips a phone number down to digits for tel: links. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const whatsappHref = `https://wa.me/${hotel.whatsapp}`;
