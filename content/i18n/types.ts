/** Every user-facing string, per locale. Plain data only, so a dict can
 *  cross the server/client boundary as a prop. */
export type RoomCopy = {
  name: string;
  tagline: string;
  intro: string;
  detail: string;
  badge: string;
  beds: string;
  bathroom: string;
  outlook: string;
  /** Labels in the same order as the room's amenities array. */
  amenities: string[];
};

export type Dict = {
  meta: { title: string; description: string };
  nav: { label: string; href: string }[];
  bookNow: string;
  hero: {
    eyebrow: string;
    heading: string;
    tagline: string;
    checkAvailability: string;
    viewRooms: string;
    /** Five short labels for the strip along the hero's foot. */
    features: string[];
    statRooms: string;
    statTypes: string;
    statRating: string;
  };
  about: { eyebrow: string; heading: string; paragraphs: string[] };
  roomsSection: { eyebrow: string; heading: string; blurb: string };
  roomCard: {
    occupancy: string;
    bedType: string;
    view: string;
    /** "{n}" is replaced with the guest count. */
    personsFmt: string;
  };
  facilities: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  nearby: {
    eyebrow: string;
    heading: string;
    intro: string;
    places: { name: string; body: string }[];
  };
  reviews: { eyebrow: string; heading: string; readMore: string; readLess: string };
  gallery: { eyebrow: string; heading: string };
  contact: {
    eyebrow: string;
    heading: string;
    blurb: string;
    address: string;
    telephone: string;
    email: string;
    checkInOut: string;
    /** "{in}" and "{out}" are replaced with the times. */
    fromUntilFmt: string;
    directions: string;
    mapTitle: string;
  };
  enquiry: {
    heading: string;
    note: string;
    name: string;
    email: string;
    phone: string;
    room: string;
    noPreference: string;
    arriving: string;
    leaving: string;
    message: string;
    placeholder: string;
    send: string;
    defaultStatus: string;
    invalid: string;
    thanks: string;
  };
  popup: {
    eyebrow: string;
    title: string;
    checkIn: string;
    checkOut: string;
    adults: string;
    children: string;
    submit: string;
    /** "{n}" is replaced with the room count. */
    noteFmt: string;
  };
  widget: {
    topLine: string;
    checkIn: string;
    checkOut: string;
    adults: string;
    children: string;
    addToStay: string;
    submit: string;
    noPayment: string;
    askHeading: string;
    askBody: string;
    whatsappUs: string;
    extras: { label: string; price: string }[];
  };
  footer: {
    blurb: string;
    explore: string;
    ourRooms: string;
    stayInTouch: string;
    newsBlurb: string;
    emailPlaceholder: string;
    subscribe: string;
    subscribed: string;
    rights: string;
  };
  whatsappMessage: string;
  roomPage: {
    home: string;
    rooms: string;
    reviewsWord: string;
    aboutRoom: string;
    inRoom: string;
    houseRulesTitle: string;
    cancellationTitle: string;
    cancellationNote: string;
    morePhotos: string;
    otherRooms: string;
    guests: string;
    beds: string;
    bathroom: string;
    outlook: string;
    size: string;
  };
  houseRules: string[];
  cancellationPolicy: string;
  rooms: Record<string, RoomCopy>;
};
