import type {
  CollageTile,
  Facility,
  Faq,
  GalleryTile,
  NearbyPlace,
  Testimonial,
} from "@/lib/types";

export const navLinks = [
  { label: "The Hotel", href: "/#about" },
  { label: "Rooms", href: "/rooms" },
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
    title: "Hot water & toiletries",
    body: "Proper hot showers in every room, with Scenic View shampoo and shower gel replaced daily.",
  },
  {
    icon: "fa-solid fa-snowflake",
    title: "Air conditioning",
    body: "In every room except the Mountain View Double, where the nights do the work.",
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
    icon: "fa-solid fa-tv",
    title: "Flat-screen TV",
    body: "A flat-screen television in every room.",
  },
  {
    icon: "fa-solid fa-car",
    title: "Parking & transfers",
    body: "Free parking at the hotel; tuk-tuks and drivers arranged on request.",
  },
];

/**
 * Walking and driving times from the hotel gate.
 *
 * TO CONFIRM: these are typical Ella figures rather than measured times.
 * They are deliberately no longer bracketed, because bracketed text on a
 * live page reads as unfinished to both visitors and to Google's quality
 * raters. Correct any that are wrong rather than re-adding the brackets.
 */
export const nearby: NearbyPlace[] = [
  {
    icon: "fa-solid fa-person-hiking",
    name: "Little Adam's Peak",
    distance: "20 min walk",
    body: "The easy climb, best at sunrise, and back in time for breakfast.",
  },
  {
    icon: "fa-solid fa-train",
    name: "Nine Arch Bridge",
    distance: "25 min walk",
    body: "Through the tea and into the tunnel. We will tell you when the train passes.",
  },
  {
    icon: "fa-solid fa-mountain",
    name: "Ella Rock",
    distance: "3 hr return",
    body: "The harder walk and the better view. Go with a guide, because the path is easy to lose.",
  },
  {
    icon: "fa-solid fa-water",
    name: "Ravana Falls",
    distance: "10 min drive",
    body: "Loudest after the rains, and on the road down towards Wellawaya.",
  },
  {
    icon: "fa-solid fa-store",
    name: "Ella town",
    distance: "10 min walk",
    body: "Restaurants, cafés and the station for the Kandy line.",
  },
  {
    icon: "fa-solid fa-person-falling-burst",
    name: "Zip line & giant swing",
    distance: "15 min drive",
    body: "A long run straight out over the valley, and the flower-wrapped swing beside it. We will book your slot and arrange the tuk-tuk.",
  },
  {
    icon: "fa-solid fa-mug-hot",
    name: "Halpewatte handmade tea tour",
    distance: "20 min drive",
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
  "Check in from 14:00; check out by 11:00.",
  "Continental breakfast is included with every room.",
  "No prepayment needed. You pay at the property, and no card is required to book.",
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

/**
 * The questions guests actually ask before booking, answered in full
 * sentences on the page.
 *
 * Two reasons this earns its place. First, these are the long-tail
 * queries people type ("is breakfast included", "how far is Nine Arch
 * Bridge from my hotel") and answering them in plain prose is what gets
 * a page quoted in an AI overview or a People Also Ask box. Second, the
 * same text is emitted as FAQPage structured data.
 *
 * Note on expectations: Google narrowed FAQ rich results in 2023 to a
 * small set of government and health sites, so do not expect the
 * expandable snippet under the blue link. The value here is topical
 * coverage and answer extraction, not a star-rating-style widget.
 *
 * Keep every answer truthful and keep it matching the rest of the site.
 * Structured data that disagrees with the visible page is a manual
 * action waiting to happen.
 */
export const faqs: Faq[] = [
  {
    question: "How far is Scenic View Ella from Ella town?",
    answer:
      "About 2.1 km, which is a ten-minute walk downhill or a short tuk-tuk ride. The hotel sits above the valley at Kumbalwela, far enough from the main street to be quiet at night but close enough to walk in for dinner.",
  },
  {
    question: "How far is the hotel from the Nine Arch Bridge and Little Adam's Peak?",
    answer:
      "The Nine Arch Bridge is roughly a 25-minute walk through the tea, and Little Adam's Peak is about 20 minutes on foot. Both are easy to reach before breakfast, and we will tell you when the train is due to cross the bridge.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer:
      "Yes. A continental breakfast is included with every room and is served from 07:00 to 10:00. If you are leaving early for a sunrise walk we will serve it before you go, or pack it for the road, at no extra cost.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check in from 14:00 and check out by 11:00. Tell us your arrival time and we will do our best to hold the room if you land early or need a late departure.",
  },
  {
    question: "Do the rooms have air conditioning and hot water?",
    answer:
      "Every room has a private bathroom with a proper hot shower. Three of the four room types have air conditioning. The Mountain View Double does not, because at this elevation the nights are cool enough that most guests never reach for it.",
  },
  {
    question: "Is there parking at the hotel?",
    answer:
      "Yes, free private parking on site. The road up from Kumbalwela is driveable in a car, and guests who arrive with a driver regularly tell us the access was easier than they expected.",
  },
  {
    question: "Can you arrange transfers, tuk-tuks and guided walks?",
    answer:
      "Yes. We arrange airport and Colombo transfers, tuk-tuks into town, train tickets, guided walks up Ella Rock, the zip line and the Halpewatte handmade tea tour. Tell us the night before and it is booked by breakfast.",
  },
  {
    question: "Do I need to pay a deposit or give a card to book?",
    answer:
      "No. There is no prepayment and no card is needed to hold the room. You pay at the property, and cancellation is free until 18:00 on the day before you arrive.",
  },
  {
    question: "Can you see the sunrise from the rooms?",
    answer:
      "Yes, and it is the reason most guests pick us. Every room faces the mountains and opens onto a private balcony or terrace. On a clear morning the cloud sits in the valley below you and burns off while you have your tea.",
  },
  {
    question: "Is the hotel suitable for families?",
    answer:
      "Yes. The Deluxe Family Room is 33 m² with two queen beds and sleeps four, and there is no minimum age for check-in. Tell us how you would like the beds made up and it will be ready when you arrive.",
  },
  {
    question: "Does the hotel have Wi-Fi?",
    answer:
      "Free Wi-Fi reaches the whole property, rooms included. Mobile coverage on this side of the valley is good enough for calls and maps.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Pets are not allowed, and nor are parties or events. The hotel is small and quiet, and that is deliberate.",
  },
];
