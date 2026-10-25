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
 * Real guest reviews from the hotel's Booking.com and TripAdvisor
 * listings, supplied by the owner. The two Russian-language reviews are
 * shown in translation; the rest keep the reviewer's own words, lightly
 * trimmed for length. Guest photos follow later, so `image` is omitted
 * and the card shows the reviewer's initial until then.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "It's a newly opened property and a small family-run business, and all the staff were amazing. The property is spotless clean and they really care about their guests. Only 10 minutes from Ella town. Would highly recommend and would definitely come back!",
    name: "Kevin",
    country: "Ireland",
    countryCode: "ie",
    image: "guests/avatar-kevin",
    date: "5 January 2026",
  },
  {
    quote:
      "Quite courteous staff, made us feel quite welcome. It's a brand new property and the rooms and bathrooms were quite clean. Overall quite great views from their balcony, especially if you're lucky to visit when it's raining.",
    name: "Chirag",
    country: "India",
    countryCode: "in",
    image: "guests/avatar-chirag",
    date: "7 January 2026",
  },
  {
    quote:
      "A brand new and clean hotel! The perfect place to watch the sunrise against the mountains, and it's easy to reach by car. The rooms are large, with air conditioning, and the staff try very hard to make your stay comfortable. When we are in Ella again, we will definitely come back!",
    name: "Elena",
    country: "Russia",
    countryCode: "ru",
    image: "guests/avatar-elena-ru",
    date: "25 January 2026",
  },
  {
    quote:
      "The hotel is clean and new, with a beautiful view from the windows. We had a room with a balcony facing the garden and the mountains, and watched an amazing sunrise straight from our bed. Breakfast was so filling there was no room left for the fruit, so they packed it for our journey.",
    name: "Elena",
    country: "Kazakhstan",
    countryCode: "kz",
    image: "guests/avatar-elena-kz",
    date: "3 February 2026",
  },
  {
    quote:
      "The property is slightly outside Ella, however it is an absolutely stunning location. The rooms were massive, clean and beautifully decorated. Breakfast superb.",
    name: "Laurie",
    country: "United Kingdom",
    countryCode: "gb",
    image: "guests/avatar-laurie",
    date: "13 February 2026",
  },
  {
    quote:
      "Travelling with my wife in Sri Lanka, we stayed for 3 nights. We're glad we picked this place. Very attentive staff, clean rooms, a beautiful view from the window and good breakfasts. Parking was also important to us. Unequivocally recommended.",
    name: "Roman",
    country: "Russia",
    countryCode: "ru",
    image: "guests/avatar-roman",
    date: "18 February 2026",
  },
  {
    quote:
      "The kindness of the staff, the breakfast, the peace and tranquility after the chaos of the city. The room is spacious and clean, the breakfast is abundant and all handmade. The family that runs it is truly exquisite, always available and welcoming.",
    name: "Rossi",
    country: "Italy",
    countryCode: "it",
    image: "guests/avatar-rossi",
    date: "19 February 2026",
    rating: 4.5,
  },
  {
    quote:
      "It's new, very clean and the staff could not do enough for you. The manager was happy to take you into Ella and pick you up for a small charge.",
    name: "Gillian",
    country: "United Kingdom",
    countryCode: "gb",
    image: "guests/avatar-gillian",
    date: "22 February 2026",
    rating: 4.5,
  },
  {
    quote:
      "Wow, what an idyllic place to stay, away from the busy town of Ella, which is a 10 minute ride by tuk-tuk. Beautiful location, stunning views and sunrises, lovely staff.",
    name: "Martin",
    country: "United Kingdom",
    countryCode: "gb",
    image: "guests/avatar-martin",
    date: "3 March 2026",
  },
  {
    quote:
      "Really enjoyed our stay at this hotel! It's brand new! The views from the balconies of the rooms are delightful, especially at dawn and dusk. The staff try very hard and help with various questions and requests, and the hotel has proper parking.",
    name: "Anel",
    country: "Russia",
    countryCode: "ru",
    image: "guests/avatar-anel",
    date: "March 2026",
  },
  {
    quote:
      "The location is amazing with breathtaking mountain views, perfectly situated slightly away from the busy Ella town. The rooms are very clean, spacious and comfortable, and since the hotel is newly opened everything feels fresh. Excellent value for money, definitely 10/10.",
    name: "Ishara",
    country: "Sri Lanka",
    countryCode: "lk",
    image: "guests/avatar-ishara",
    date: "March 2026",
  },
  {
    quote:
      "The rooms were spotless, spacious and very comfortable, a great place to relax after a day of exploring. The staff were incredibly welcoming, friendly and always ready to help with a smile. Everything exceeded my expectations. I will definitely stay here again!",
    name: "Sashini",
    country: "Sri Lanka",
    countryCode: "lk",
    image: "guests/avatar-sashini",
    date: "July 2026",
  },
  {
    quote:
      "What convinced us was the early-morning photographs of the sunrise views taken from the property. When our party of seven arrived, we were pleasantly surprised to find the hotel had recently been constructed to a high standard. The owner and staff were very friendly, welcoming and always happy to help.",
    name: "Jake",
    country: "Thailand",
    countryCode: "th",
    image: "guests/avatar-jake",
    date: "17 August 2026",
  },
  {
    quote:
      "Superb location, so comfortable for us to visit Mahamevnawa Asapuwa. Good and tasty food, and the staff were so friendly.",
    name: "Sriyantha",
    country: "Sri Lanka",
    countryCode: "lk",
    image: "guests/avatar-sriyantha",
    date: "11 September 2026",
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
  heading: "A Peaceful Stay Above the Clouds",
  paragraphs: [
    "Scenic View – Ella is a welcoming, family-run boutique guesthouse nestled in the tranquil hills surrounding Ella, Sri Lanka. Located approximately 2.1 km from the town centre, our property offers a relaxing retreat away from the busy streets, with sweeping views of the mist-covered mountains and surrounding greenery.",
    "Our four thoughtfully appointed rooms combine modern comforts with the natural beauty of the highlands. Wake up to fresh mountain air, unwind on your private balcony or terrace, and enjoy the genuine hospitality of a family dedicated to making your stay comfortable and memorable.",
    "Whether you are visiting Ella for its famous hiking trails, scenic train journeys, iconic bridges, or simply a few days of relaxation, Scenic View – Ella provides a welcoming base for your Sri Lankan adventure.",
  ],
};

export const heroCopy = {
  eyebrow: "Four rooms above Ella",
  heading: "Wake Up to the\nScenic Beauty of Ella",
};

/** The hotel entrance with its sign, the valley behind. */
export const heroImage = "hero-view";
export const pageHeroImage = "view-01";
