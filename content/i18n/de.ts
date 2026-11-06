import type { Dict } from "./types";

/** German. Reviewed wording, no machine translation. */
export const de: Dict = {
  meta: {
    title: "Scenic View Ella | Hotel mit Bergblick, Ella, Sri Lanka",
    description:
      "Vier Zimmer über Ella, Sri Lanka. Eigene Balkone über dem Tal, Sonnenaufgang über dem Nebel, die Nine Arch Bridge ganz in der Nähe.",
  },
  nav: [
    { label: "Das Hotel", href: "/#about" },
    { label: "Zimmer", href: "/rooms" },
    { label: "Ausstattung", href: "/#facilities" },
    { label: "Ella", href: "/#nearby" },
    { label: "Galerie", href: "/#gallery" },
    { label: "Journal", href: "/journal" },
    { label: "Kontakt", href: "/#contact" },
  ],
  bookNow: "Jetzt buchen",
  hero: {
    eyebrow: "Ihre ruhige Bergauszeit in Ella",
    heading: "Aufwachen inmitten\nder Berge von Ella",
    tagline:
      "Ein Hotel am Hang über Ella, wo jedes Zimmer auf die Berge blickt und der Morgen über einem Wolkenmeer beginnt.",
    checkAvailability: "Verfügbarkeit prüfen",
    viewRooms: "Zimmer ansehen",
    features: [
      "Panorama-Bergblick",
      "Eigener Balkon und Terrasse",
      "Familiengeführte Gastfreundschaft",
      "Hauseigenes Restaurant",
      "Kostenloses WLAN und Parken",
    ],
    statRooms: "Zimmer",
    statTypes: "Zimmertypen",
    statRating: "Gästebewertung",
  },
  about: {
    eyebrow: "Das Hotel",
    heading: "Ruhige Tage über den Wolken",
    paragraphs: [
      "Scenic View Ella ist ein herzliches, familiengeführtes Boutique-Gästehaus in den stillen Hügeln rund um Ella, Sri Lanka. Etwa 2,1 km vom Ortskern entfernt bieten wir einen erholsamen Rückzugsort abseits der belebten Straßen, mit weitem Blick auf nebelverhangene Berge und das Grün ringsum.",
      "Unsere vier liebevoll eingerichteten Zimmer verbinden modernen Komfort mit der Natur des Hochlands. Wachen Sie mit frischer Bergluft auf, entspannen Sie auf Ihrem eigenen Balkon oder Ihrer Terrasse und erleben Sie die echte Gastfreundschaft einer Familie, der Ihr Aufenthalt am Herzen liegt.",
      "Ob Sie wegen der berühmten Wanderwege, der malerischen Zugfahrten, der ikonischen Brücken oder einfach für ein paar ruhige Tage nach Ella kommen, Scenic View Ella ist die ideale Basis für Ihr Sri-Lanka-Abenteuer.",
    ],
  },
  roomsSection: {
    eyebrow: "Zimmer",
    heading: "Vier Zimmertypen. Jeder mit Blick auf die Berge.",
    blurb:
      "Jedes Zimmer hat Bergblick, einen eigenen Balkon oder eine Terrasse, eine heiße Dusche, einen Fernseher und kostenloses WLAN. Das Frühstück ist bei jedem Zimmer inbegriffen.",
  },
  roomCard: {
    occupancy: "Belegung",
    bedType: "Betten",
    view: "Ansehen",
    personsFmt: "{n} Personen",
  },
  facilities: {
    eyebrow: "Ausstattung",
    heading: "Was zum Zimmer gehört.",
    items: [
      {
        title: "Eigener Balkon",
        body: "Stühle und ein Tisch vor Ihrer Tür, mit Blick ins Tal.",
      },
      {
        title: "Restaurant",
        body: "Frühstück jeden Morgen und Abendessen auf Wunsch, im Speiseraum.",
      },
      {
        title: "Warmes Wasser und Pflegeprodukte",
        body: "Richtig heiße Duschen in jedem Zimmer, mit Scenic-View-Shampoo und Duschgel, täglich erneuert.",
      },
      {
        title: "Klimaanlage",
        body: "In jedem Zimmer außer dem Doppelzimmer mit Bergblick, wo die Nächte die Arbeit übernehmen.",
      },
      {
        title: "Kostenloses WLAN",
        body: "Im ganzen Hotel, Zimmer eingeschlossen.",
      },
      {
        title: "Wasserkocher und Wasser",
        body: "Tee, Kaffee und Flaschenwasser warten im Zimmer.",
      },
      {
        title: "Flachbildfernseher",
        body: "Ein Flachbildfernseher in jedem Zimmer.",
      },
      {
        title: "Parkplatz und Transfers",
        body: "Kostenlose Parkplätze am Hotel, Tuk-Tuks und Fahrer organisieren wir auf Wunsch.",
      },
    ],
  },
  nearby: {
    eyebrow: "Rund um Ella",
    heading: "Alles, wofür man nach Ella kommt, direkt vor der Tür.",
    intro:
      "Sagen Sie uns am Vorabend Bescheid, und bis zum Frühstück sind Tuk-Tuk, Guide oder Zugtickets organisiert.",
    places: [
      {
        name: "Little Adam's Peak",
        body: "Der leichte Aufstieg, am schönsten bei Sonnenaufgang, und zurück zum Frühstück.",
      },
      {
        name: "Nine Arch Bridge",
        body: "Durch den Tee und in den Tunnel. Wir sagen Ihnen, wann der Zug kommt.",
      },
      {
        name: "Ella Rock",
        body: "Die anspruchsvollere Wanderung mit der besseren Aussicht. Gehen Sie mit Guide, der Weg ist leicht zu verlieren.",
      },
      {
        name: "Ravana-Wasserfall",
        body: "Am lautesten nach dem Regen, an der Straße hinunter nach Wellawaya.",
      },
      {
        name: "Das Städtchen Ella",
        body: "Restaurants, Cafés und der Bahnhof der Strecke nach Kandy.",
      },
      {
        name: "Zipline und Riesenschaukel",
        body: "Ein langer Flug direkt über das Tal und die blumengeschmückte Schaukel daneben. Wir buchen Ihren Termin und organisieren das Tuk-Tuk.",
      },
      {
        name: "Halpewatte Tee-Tour",
        body: "Pflücken Sie das Blatt selbst, rollen und trocknen Sie es von Hand in der Werkstatt und nehmen Sie Ihren eigenen Tee mit nach Hause.",
      },
    ],
  },
  reviews: {
    eyebrow: "Gästebuch",
    heading: "Was Gäste danach schreiben.",
    readMore: "Mehr lesen",
    readLess: "Weniger anzeigen",
    countedWord: "Gästebewertungen",
  },
  faq: {
    eyebrow: "Vor der Buchung",
    heading: "Was Gäste uns fragen.",
    blurb:
      "Steht Ihre Frage nicht dabei, schreiben Sie uns über WhatsApp. Dort antworten wir am schnellsten.",
    items: [
      {
        question: "Wie weit ist Scenic View Ella vom Ortszentrum Ella entfernt?",
        answer:
          "Rund 2,1 km, also zehn Minuten bergab zu Fuß oder eine kurze Fahrt mit dem Tuk-Tuk. Das Hotel liegt über dem Tal in Kumbalwela, weit genug von der Hauptstraße für ruhige Nächte und nah genug, um zum Abendessen hineinzulaufen.",
      },
      {
        question: "Wie weit sind die Nine Arch Bridge und Little Adams Peak?",
        answer:
          "Zur Nine Arch Bridge sind es etwa 25 Minuten zu Fuß durch die Teefelder, zum Little Adams Peak etwa 20 Minuten. Beides ist vor dem Frühstück gut zu schaffen, und wir sagen Ihnen, wann der Zug über die Brücke fährt.",
      },
      {
        question: "Ist das Frühstück im Zimmerpreis enthalten?",
        answer:
          "Ja. Ein kontinentales Frühstück ist in jedem Zimmer enthalten und wird von 07:00 bis 10:00 Uhr serviert. Wenn Sie früh zum Sonnenaufgang aufbrechen, servieren wir es vorher oder packen es Ihnen ein, ohne Aufpreis.",
      },
      {
        question: "Wann sind Check-in und Check-out?",
        answer:
          "Check-in ab 14:00 Uhr, Check-out bis 11:00 Uhr. Sagen Sie uns Ihre Ankunftszeit, und wir halten das Zimmer nach Möglichkeit früher bereit oder verlängern die Abreise.",
      },
      {
        question: "Haben die Zimmer Klimaanlage und warmes Wasser?",
        answer:
          "Jedes Zimmer hat ein eigenes Bad mit warmer Dusche. Drei der vier Zimmertypen haben eine Klimaanlage. Das Mountain View Double hat keine, weil die Nächte auf dieser Höhe kühl genug sind, dass sie kaum jemand vermisst.",
      },
      {
        question: "Gibt es Parkplätze am Hotel?",
        answer:
          "Ja, kostenlose Privatparkplätze auf dem Gelände. Die Straße von Kumbalwela herauf ist mit dem Pkw befahrbar, und Gäste mit Fahrer sagen uns regelmäßig, die Zufahrt sei einfacher gewesen als erwartet.",
      },
      {
        question: "Organisieren Sie Transfers, Tuk-Tuks und geführte Wanderungen?",
        answer:
          "Ja. Wir organisieren Transfers vom Flughafen und aus Colombo, Tuk-Tuks in den Ort, Zugtickets, geführte Wanderungen auf den Ella Rock, die Zipline und die Teetour bei Halpewatte. Sagen Sie am Vorabend Bescheid, und bis zum Frühstück ist es gebucht.",
      },
      {
        question: "Brauche ich eine Anzahlung oder eine Kreditkarte zum Buchen?",
        answer:
          "Nein. Es ist keine Vorauszahlung nötig und auch keine Karte, um das Zimmer zu halten. Sie zahlen vor Ort, und bis 18:00 Uhr am Vortag der Anreise ist die Stornierung kostenlos.",
      },
      {
        question: "Sieht man den Sonnenaufgang vom Zimmer aus?",
        answer:
          "Ja, und deswegen kommen die meisten Gäste. Jedes Zimmer liegt zu den Bergen und öffnet sich auf einen eigenen Balkon oder eine Terrasse. An einem klaren Morgen liegen die Wolken unter Ihnen im Tal und lösen sich auf, während Sie Ihren Tee trinken.",
      },
      {
        question: "Ist das Hotel für Familien geeignet?",
        answer:
          "Ja. Das Deluxe Family Room hat 33 m² und zwei Queensize-Betten für vier Personen, und beim Check-in gibt es keine Altersgrenze. Sagen Sie uns, wie die Betten stehen sollen, dann ist es bei Ihrer Ankunft fertig.",
      },
      {
        question: "Gibt es WLAN?",
        answer:
          "Kostenloses WLAN auf dem gesamten Gelände, auch in den Zimmern. Der Mobilfunkempfang auf dieser Talseite reicht für Telefonate und Karten gut aus.",
      },
      {
        question: "Sind Haustiere erlaubt?",
        answer:
          "Haustiere sind nicht erlaubt, Partys und Veranstaltungen ebenfalls nicht. Das Hotel ist klein und ruhig, und das ist Absicht.",
      },
    ],
  },
  roomsIndex: {
    title: "Zimmer in Ella mit Bergblick",
    description:
      "Vier Zimmertypen im Scenic View Ella, jedes mit Bergblick, eigenem Balkon und Frühstück inklusive. Vergleichen und direkt buchen.",
    eyebrow: "Zimmer",
    heading: "Vier Zimmertypen. Jedes mit Blick auf die Berge.",
    blurb:
      "Jedes Zimmer öffnet sich auf einen eigenen Balkon oder eine Terrasse über dem Tal, mit warmer Dusche, Flachbildfernseher und kostenlosem WLAN. Das Frühstück ist überall inklusive. Wählen Sie unten ein Zimmer für Fotos, die genaue Größe und die Ausstattung.",
  },
  gallery: {
    eyebrow: "Galerie",
    heading: "Das Hotel, die Zimmer, die Aussicht.",
  },
  contact: {
    eyebrow: "Reservierung",
    heading: "Buchen Sie direkt bei uns.",
    blurb:
      "Direkt zu buchen ist günstiger als über die Portale, und Sie schreiben den Menschen, die Sie an der Tür begrüßen werden.",
    address: "Adresse",
    telephone: "Telefon",
    email: "E-Mail",
    checkInOut: "Check-in / Check-out",
    fromUntilFmt: "Ab {in} · bis {out}",
    directions: "Route planen",
    mapTitle: "Karte mit dem Hotel Scenic View Ella",
  },
  enquiry: {
    heading: "Anfrage für einen Aufenthalt",
    note: "Keine Zahlung jetzt. Wir lesen jede Nachricht selbst und antworten per E-Mail.",
    name: "Ihr Name",
    email: "E-Mail-Adresse",
    phone: "Telefon / WhatsApp",
    room: "Gewünschtes Zimmer",
    noPreference: "Noch keine Präferenz",
    arriving: "Anreise",
    leaving: "Abreise",
    message: "Gibt es etwas, das wir wissen sollten?",
    placeholder: "Ankunftszeit, Ernährung, ein Anlass?",
    send: "Anfrage senden",
    defaultStatus:
      "Wir antworten auf jede Anfrage innerhalb eines Tages, meist deutlich schneller.",
    invalid: "Bitte geben Sie Ihren Namen und eine gültige E-Mail-Adresse an.",
    thanks: "Vielen Dank. Ihre Anfrage ist notiert, wir antworten innerhalb eines Tages.",
  },
  popup: {
    eyebrow: "Planen Sie Ihren Aufenthalt",
    title: "Details zur Anreise",
    checkIn: "Check-in",
    checkOut: "Check-out",
    adults: "Erwachsene",
    children: "Kinder",
    submit: "Verfügbarkeit prüfen",
    noteFmt:
      "Wir haben nur {n} Zimmer, darum bestätigen wir jede Buchung persönlich, meist innerhalb einer Stunde.",
  },
  widget: {
    topLine: "Frühstück inbegriffen · jede Buchung wird persönlich bestätigt",
    checkIn: "Check-in",
    checkOut: "Check-out",
    adults: "Erwachsene",
    children: "Kinder",
    addToStay: "Zum Aufenthalt hinzufügen",
    submit: "Verfügbarkeit prüfen",
    noPayment: "Keine Zahlung jetzt. Wir bestätigen zuerst per E-Mail.",
    askHeading: "Lieber einfach fragen?",
    askBody: "Auf WhatsApp antworten wir am schnellsten, meist innerhalb einer Stunde.",
    whatsappUs: "WhatsApp schreiben",
    extras: [
      { label: "Transfer vom Flughafen oder aus Colombo", price: "Auf Anfrage" },
      { label: "Abendessen, frisch zubereitet", price: "Auf Anfrage" },
      { label: "Geführte Wanderung oder Tuk-Tuk", price: "Auf Anfrage" },
      { label: "Frühes Frühstück vor der Sonnenaufgangstour", price: "Kostenlos" },
    ],
  },
  footer: {
    blurb: "Ein Hotel am Hang über Ella, im Hochland von Sri Lanka.",
    explore: "Entdecken",
    ourRooms: "Unsere Zimmer",
    stayInTouch: "In Kontakt bleiben",
    newsBlurb: "Gelegentliche Notizen zur Saison und zu freien Terminen.",
    emailPlaceholder: "E-Mail-Adresse",
    subscribe: "Abonnieren",
    subscribed: "Vielen Dank. Sie stehen auf der Liste.",
    rights: "Alle Rechte vorbehalten.",
  },
  whatsappMessage: "Schreiben Sie uns auf WhatsApp",
  roomPage: {
    home: "Startseite",
    rooms: "Zimmer",
    reviewsWord: "Bewertungen",
    aboutRoom: "Über dieses Zimmer",
    inRoom: "Im Zimmer",
    houseRulesTitle: "Hausregeln",
    cancellationTitle: "Stornierung",
    cancellationNote:
      "Direkt bei uns gebucht? Sagen Sie uns Bescheid, sobald Sie es wissen, und wir tun, was wir können.",
    morePhotos: "Mehr von diesem Zimmer",
    otherRooms: "Die anderen Zimmer",
    guests: "Gäste",
    beds: "Betten",
    bathroom: "Bad",
    outlook: "Aussicht",
    size: "Größe",
  },
  houseRules: [
    "Check-in ab [14:00], Check-out bis [11:00].",
    "Kontinentales Frühstück ist bei jedem Zimmer inbegriffen.",
    "Keine Vorauszahlung nötig. Sie zahlen vor Ort, zur Buchung ist keine Karte erforderlich.",
    "Keine Altersbeschränkung beim Check-in.",
    "Haustiere sind nicht erlaubt.",
    "Partys und Veranstaltungen sind nicht erlaubt.",
  ],
  cancellationPolicy:
    "Kostenlose Stornierung bis 18:00 Uhr am Tag vor der Anreise. Keine Vorauszahlung nötig, keine Karte erforderlich, um das Zimmer zu halten.",
  rooms: {
    "mountain-view-twin": {
      name: "Twin mit Bergblick",
      tagline: "Zwei Betten, ein Balkon und ein Tisch zum Sitzen.",
      intro:
        "Dieselben 30 m² und dieselbe Aussicht, mit zwei Betten statt einem großen. Unser Zimmer für gemeinsam reisende Freunde und alle, die lieber ihre eigene Matratze haben.",
      detail:
        "Klimaanlage, eine Sitzecke am Fenster, ein Kleiderschrank und ein eigenes Bad mit heißer Dusche. Die Balkontüren öffnen sich auf dasselbe Tal.",
      badge: "Zwei Betten",
      beds: "2 Doppelbetten",
      bathroom: "Eigenes Bad",
      outlook: "Bergblick",
      amenities: [
        "Balkon und Terrasse",
        "Bergblick",
        "Klimaanlage",
        "Eigenes Bad",
        "Flachbild-TV",
        "Kostenloses WLAN",
        "Kontinentales Frühstück",
      ],
    },
    "deluxe-double-balcony": {
      name: "Deluxe-Doppelzimmer mit Balkon",
      tagline: "Ein Kingsize-Bett, eine Minibar und der beste Balkon im Haus.",
      intro:
        "Das Zimmer, über das uns Gäste hinterher schreiben. Ein Kingsize-Bett, eine Minibar und raumhohe Türen auf einen Balkon mit zwei Stühlen und einem Tisch, mit Blick geradewegs ins Tal.",
      detail:
        "An klaren Morgen liegen die Wolken unter Ihnen und lösen sich auf, während Sie Ihren Tee trinken. Klimaanlage, Flachbild-TV und ein eigenes Bad mit ebenerdiger Dusche.",
      badge: "Minibar",
      beds: "1 Kingsize-Bett",
      bathroom: "Eigenes Bad",
      outlook: "Bergblick",
      amenities: [
        "Balkon und Terrasse",
        "Bergblick",
        "Klimaanlage",
        "Minibar",
        "Eigenes Bad",
        "Flachbild-TV",
        "Kostenloses WLAN",
        "Kontinentales Frühstück",
      ],
    },
    "mountain-view-double": {
      name: "Doppelzimmer mit Bergblick",
      tagline: "Ein Queensize-Bett, ein Balkon und das Tal direkt davor.",
      intro:
        "Ein geräumiges, günstiges Zimmer, und das, das zuerst weg ist. Ein Queensize-Bett, ein Kleiderschrank und ein eigenes Bad mit heißer Dusche, die Balkontüren öffnen sich zum Tal.",
      detail:
        "Das einzige Zimmer ohne Klimaanlage. Auf dieser Höhe sind die Nächte kühl genug, dass die meisten Gäste sie nie vermissen. Wer sie möchte, nimmt eines der klimatisierten Zimmer.",
      badge: "Bester Preis",
      beds: "1 Queensize-Bett",
      bathroom: "Eigenes Bad",
      outlook: "Bergblick",
      amenities: [
        "Balkon und Terrasse",
        "Bergblick",
        "Eigenes Bad",
        "Flachbild-TV",
        "Kostenloses WLAN",
        "Kontinentales Frühstück",
      ],
    },
    "deluxe-family-room": {
      name: "Deluxe-Familienzimmer",
      tagline: "Unser größtes Zimmer, mit zwei Queensize-Betten und Platz für die Familie.",
      intro:
        "Dreiunddreißig Quadratmeter und zwei Queensize-Betten, mit Platz für eine vierköpfige Familie. Sagen Sie uns, wie wir die Betten richten sollen, und alles ist vorbereitet.",
      detail:
        "Klimaanlage, ein Schreibtisch und Balkontüren mit derselben Aussicht wie jedes andere Zimmer im Haus.",
      badge: "Am größten",
      beds: "2 Queensize-Betten",
      bathroom: "Eigenes Bad",
      outlook: "Bergblick",
      amenities: [
        "Balkon und Terrasse",
        "Bergblick",
        "Klimaanlage",
        "Eigenes Bad",
        "Flachbild-TV",
        "Kostenloses WLAN",
        "Kontinentales Frühstück",
      ],
    },
  },
};
