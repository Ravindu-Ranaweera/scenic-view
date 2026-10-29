import { hotel } from "@/content/hotel";
import { rooms, stayExtras } from "@/content/rooms";
import {
  aboutCopy,
  cancellationPolicy,
  facilities,
  heroCopy,
  houseRules,
  navLinks,
  nearby,
} from "@/content/site";

import type { Dict, RoomCopy } from "./types";

/** English is the source of truth: assembled from the content files so
 *  nothing is written twice. */
export const en: Dict = {
  meta: {
    title: `${hotel.name} | Hotel with Mountain Views, Ella, Sri Lanka`,
    description:
      "A four-room hotel above Ella, Sri Lanka. Private balconies over the valley, sunrise above the mist, and Little Adam's Peak and the Nine Arch Bridge on the doorstep.",
  },
  nav: navLinks,
  bookNow: "Book Now",
  hero: {
    eyebrow: "Your peaceful mountain escape in Ella",
    heading: heroCopy.heading,
    tagline: hotel.tagline,
    checkAvailability: "Check Availability",
    viewRooms: "View Rooms",
    features: [
      "Panoramic Mountain Views",
      "Private Balcony & Terrace",
      "Family-Run Hospitality",
      "On-Site Restaurant",
      "Free Wi-Fi & Parking",
    ],
    statRooms: "Rooms",
    statTypes: "Room types",
    statRating: "Guest rating",
  },
  about: {
    eyebrow: "The Hotel",
    heading: aboutCopy.heading,
    paragraphs: aboutCopy.paragraphs,
  },
  roomsSection: {
    eyebrow: "Rooms",
    heading: "Four rooms. Every one facing the mountains.",
    blurb:
      "Every room has a mountain view, a private balcony or terrace, a hot shower, a television and free Wi-Fi. Breakfast is included with every room.",
  },
  roomCard: {
    occupancy: "Occupancy",
    bedType: "Bed Type",
    view: "View",
    personsFmt: "{n} Persons",
  },
  facilities: {
    eyebrow: "Facilities",
    heading: "What comes with the room.",
    items: facilities.map(({ title, body }) => ({ title, body })),
  },
  nearby: {
    eyebrow: "Around Ella",
    heading: "Everything people come to Ella for, from the door.",
    intro:
      "Tell us the night before and the tuk-tuk, the guide or the train tickets are arranged by breakfast.",
    places: nearby.map(({ name, body }) => ({ name, body })),
  },
  reviews: {
    eyebrow: "Guest Book",
    heading: "What people write afterwards.",
    readMore: "Read more",
    readLess: "Read less",
  },
  gallery: {
    eyebrow: "Gallery",
    heading: "The hotel, the rooms, the view.",
  },
  contact: {
    eyebrow: "Reservations",
    heading: "Book with us directly.",
    blurb:
      "Booking through us costs less than the agency sites, and you are writing to the people who will meet you at the door.",
    address: "Address",
    telephone: "Telephone",
    email: "Email",
    checkInOut: "Check in / out",
    fromUntilFmt: "From {in} · until {out}",
    directions: "Get Directions",
    mapTitle: `Map showing ${hotel.name}`,
  },
  enquiry: {
    heading: "Enquire about a stay",
    note: "No payment now. We read every message ourselves and reply by email.",
    name: "Your name",
    email: "Email address",
    phone: "Phone / WhatsApp",
    room: "Room of interest",
    noPreference: "No preference yet",
    arriving: "Arriving",
    leaving: "Leaving",
    message: "Anything we should know?",
    placeholder: "Arrival time, diets, a celebration?",
    send: "Send Enquiry",
    defaultStatus: "We reply to every enquiry within a day, usually much sooner.",
    invalid: "Please fill in your name and a valid email address.",
    thanks: "Thank you. Your enquiry is noted and we will reply within a day.",
  },
  popup: {
    eyebrow: "Plan your stay",
    title: "Check-in details",
    checkIn: "Check in",
    checkOut: "Check out",
    adults: "Adults",
    children: "Children",
    submit: "Check Availability",
    noteFmt:
      "We hold only {n} rooms, so every booking is confirmed by hand, usually within the hour.",
  },
  widget: {
    topLine: "Breakfast included · we confirm every booking by hand",
    checkIn: "Check in",
    checkOut: "Check out",
    adults: "Adults",
    children: "Children",
    addToStay: "Add to your stay",
    submit: "Check Availability",
    noPayment: "No payment now. We confirm by email first.",
    askHeading: "Rather just ask?",
    askBody: "We answer WhatsApp faster than anything else, usually within the hour.",
    whatsappUs: "WhatsApp us",
    extras: stayExtras,
  },
  footer: {
    blurb: "A hotel on the hillside above Ella, in Sri Lanka's hill country.",
    explore: "Explore",
    ourRooms: "Our rooms",
    stayInTouch: "Stay in touch",
    newsBlurb: "Occasional notes on the season and open dates.",
    emailPlaceholder: "Email address",
    subscribe: "Subscribe",
    subscribed: "Thank you. You are on the list.",
    rights: "All rights reserved.",
  },
  whatsappMessage: "Message us on WhatsApp",
  roomPage: {
    home: "Home",
    rooms: "Rooms",
    reviewsWord: "reviews",
    aboutRoom: "About this room",
    inRoom: "In the room",
    houseRulesTitle: "House rules",
    cancellationTitle: "Cancellation",
    cancellationNote:
      "Booking direct with us? Tell us as soon as you know and we will do what we can.",
    morePhotos: "More of this room",
    otherRooms: "The other rooms",
    guests: "Guests",
    beds: "Beds",
    bathroom: "Bathroom",
    outlook: "Outlook",
    size: "Size",
  },
  houseRules,
  cancellationPolicy,
  rooms: Object.fromEntries(
    rooms.map((room): [string, RoomCopy] => [
      room.slug,
      {
        name: room.name,
        tagline: room.tagline,
        intro: room.intro,
        detail: room.detail,
        badge: room.badge,
        beds: room.beds,
        bathroom: room.bathroom,
        outlook: room.outlook,
        amenities: room.amenities.map((a) => a.label),
      },
    ]),
  ),
};
