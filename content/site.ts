import type {
  CollageTile,
  Facility,
  GalleryTile,
  NearbyPlace,
  Testimonial,
} from "@/lib/types";

export const navLinks = [
  { label: "The Hotel", href: "/#about" },
  { label: "Rooms", href: "/#rooms" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Ella", href: "/#nearby" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/#contact" },
];

/** Only what is visible in the owner's own photographs. */
export const facilities: Facility[] = [
  {
    icon: "fa-solid fa-mountain-sun",
    title: "Private balcony",
    body: "Chairs and a table outside your door, facing the valley.",
  },
  {
    icon: "fa-solid fa-utensils",
    title: "Restaurant",
    body: "Breakfast each morning and dinner on request, in the dining room.",
  },
  {
    icon: "fa-solid fa-shower",
    title: "Hot water",
    body: "Proper hot showers in every room. It gets cold up here at night.",
  },
  {
    icon: "fa-solid fa-snowflake",
    title: "Air conditioning",
    body: "In every room except the 22 m² double, where the nights do the work.",
  },
  {
    icon: "fa-solid fa-wifi",
    title: "Free Wi-Fi",
    body: "Throughout the hotel, rooms included.",
  },
  {
    icon: "fa-solid fa-mug-saucer",
    title: "Kettle & water",
    body: "Tea, coffee and bottled water waiting in the room.",
  },
  {
    icon: "fa-solid fa-pump-soap",
    title: "Our own toiletries",
    body: "Scenic View shampoo and shower gel, replaced daily.",
  },
  {
    icon: "fa-solid fa-car",
    title: "Parking & transfers",
    body: "Free parking at the hotel; tuk-tuks and drivers arranged on request.",
  },
];

/** TO CONFIRM: distances are typical Ella figures, not measured from the hotel. */
export const nearby: NearbyPlace[] = [
  {
    icon: "fa-solid fa-person-hiking",
    name: "Little Adam's Peak",
    distance: "[20 min walk]",
    body: "The easy climb, best at sunrise, and back in time for breakfast.",
  },
  {
    icon: "fa-solid fa-train",
    name: "Nine Arch Bridge",
    distance: "[25 min walk]",
    body: "Through the tea and into the tunnel. We will tell you when the train passes.",
  },
  {
    icon: "fa-solid fa-mountain",
    name: "Ella Rock",
    distance: "[3 hr return]",
    body: "The harder walk and the better view. Go with a guide, because the path is easy to lose.",
  },
  {
    icon: "fa-solid fa-water",
    name: "Ravana Falls",
    distance: "[10 min drive]",
    body: "Loudest after the rains, and on the road down towards Wellawaya.",
  },
  {
    icon: "fa-solid fa-store",
    name: "Ella town",
    distance: "[10 min walk]",
    body: "Restaurants, cafés and the station for the Kandy line.",
  },
  {
    icon: "fa-solid fa-person-falling-burst",
    name: "Zip line & giant swing",
    distance: "[15 min drive]",
    body: "A long run straight out over the valley, and the flower-wrapped swing beside it. We will book your slot and arrange the tuk-tuk.",
  },
  {
    icon: "fa-solid fa-mug-hot",
    name: "Halpewatte handmade tea tour",
    distance: "[20 min drive]",
    body: "Pick the leaf yourself, then roll and dry it by hand in the workshop and take your own tea home with you.",
  },
];

/** Six tiles for the Around Ella collage. Order fills the two columns
 *  alternately, so reordering here reshuffles the layout. */
export const nearbyCollage: CollageTile[] = [
  { src: "blog/little-adams-peak", alt: "The path up Little Adam's Peak", shape: "landscape" },
  { src: "blog/ravana-falls", alt: "Ravana Falls after the rains", shape: "portrait" },
  { src: "blog/nine-arch-arches", alt: "The arches of the Nine Arch Bridge", shape: "landscape" },
  { src: "blog/zipline-ella", alt: "The zip line out over the valley", shape: "portrait" },
  { src: "blog/ella-rock", alt: "The view from Ella Rock", shape: "landscape" },
  { src: "blog/tea-handmade", alt: "Rolling tea by hand at Halpewatte", shape: "landscape" },
];

/**
 * SAMPLE REVIEWS. The wording, the names, the countries and the
 * photographs are all invented so the section can be designed and
 * demonstrated. Nobody listed here has stayed at the hotel.
 *
 * Swap all three for real reviews before the site goes live. Publishing
 * invented testimonials under invented names is deceptive, and unlawful
 * in the UK and the US among others.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "We came for two nights and stayed five. Breakfast on the balcony with the cloud still sitting in the valley, and I have not stopped thinking about it since.",
    name: "Hannah Weber",
    country: "Germany",
    countryCode: "de",
    date: "14 September 2026",
    image: "guests/avatar-railway",
  },
  {
    quote:
      "They sorted our train tickets and a tuk-tuk to the falls without us having to ask twice. Felt less like a hotel, more like staying with friends who know the place.",
    name: "Sanne de Vries",
    country: "Netherlands",
    countryCode: "nl",
    date: "2 August 2026",
    image: "guests/avatar-cliff",
  },
  {
    quote:
      "Up Little Adam's Peak for sunrise and back before the eggs went cold. Spotless room, hot shower that stayed hot, and the best view I have had from a bed anywhere.",
    name: "Marco Bianchi",
    country: "Italy",
    countryCode: "it",
    date: "27 June 2026",
    image: "guests/avatar-viewpoint",
  },
];

/** Nine tiles filling the 4x3 grid defined in Gallery.module.css. */
export const galleryTiles: GalleryTile[] = [
  { src: "amenity-08", alt: "Wardrobe and writing desk in a guest room", area: "a" },
  { src: "view-01", alt: "Mountains and mist at dawn", area: "b" },
  { src: "view-12", alt: "The dining room", area: "c" },
  { src: "amenity-03", alt: "Table and chairs on a private terrace", area: "d" },
  { src: "amenity-04", alt: "Scenic View shampoo and shower gel", area: "e" },
  { src: "deluxe-01", alt: "Inside a Deluxe Double room", area: "f" },
  { src: "view-08", alt: "Cloud filling the valley at sunrise", area: "g" },
  { src: "view-02", alt: "The hotel from above, among the trees", area: "h" },
  { src: "amenity-02", alt: "Bathroom with a walk-in shower", area: "i" },
];

/** From the hotel's Booking.com listing. */
export const houseRules = [
  "Check in from [14:00]; check out by [11:00].",
  "Continental breakfast is included with every room.",
  "No prepayment needed. You pay at the property, and no card is required to book.",
  "Cash only. The property does not take card payments.",
  "No age restriction: there is no minimum age for check-in.",
  "Pets are not allowed.",
  "Parties and events are not allowed.",
];

export const cancellationPolicy =
  "Free cancellation until 18:00 on the day before arrival. No prepayment is needed and no card is required to hold the room.";

export const aboutCopy = {
  heading: "Built where the view is, and for no other reason.",
  paragraphs: [
    // TO CONFIRM: when the hotel opened, and who runs it.
    "A slope above Ella town, high enough that the clouds settle in the valley below you. Eight rooms, every one with its own balcony.",
    "Close enough to walk into town for dinner. Far enough up to hear birds instead of buses.",
  ],
};

export const heroCopy = {
  eyebrow: "Eight rooms above Ella",
  heading: "The mist clears, and the whole valley is yours.",
};

/** Drone shot of the hotel in the hillside green. */
export const heroImage = "view-02";
export const pageHeroImage = "view-01";
