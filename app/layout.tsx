import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { hotel, siteUrl } from "@/content/hotel";
import { heroImage } from "@/content/site";

import "./globals.css";

/**
 * Fonts are self-hosted rather than fetched through next/font/google.
 *
 * next/font/google downloads from fonts.gstatic.com at build time, which
 * makes every build depend on that host being reachable — it is not, from
 * some networks and CI runners. These are the same files, committed, so the
 * build is offline-safe and the browser makes no third-party request.
 *
 * Both are variable fonts: one file covers the whole weight range.
 * Latin subset only. If you need Eastern European accents, re-download with
 * the latin-ext subset as well.
 */
const cormorant = localFont({
  src: "./fonts/cormorant-garamond-variable-latin.woff2",
  weight: "400 600",
  style: "normal",
  variable: "--font-cormorant",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-variable-latin.woff2",
  weight: "300 500",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

/* Cyrillic subsets for the Russian pages. The latin files above hold no
   Cyrillic glyphs, so these sit next in the font-family chain and the
   browser falls through to them per glyph. */
const cormorantCyr = localFont({
  src: "./fonts/cormorant-garamond-variable-cyrillic.woff2",
  weight: "400 600",
  style: "normal",
  variable: "--font-cormorant-cyr",
  display: "swap",
});

const interCyr = localFont({
  src: "./fonts/inter-variable-cyrillic.woff2",
  weight: "300 500",
  style: "normal",
  variable: "--font-inter-cyr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${hotel.name} | Hotel with Mountain Views, Ella, Sri Lanka`,
    template: `%s | ${hotel.name}`,
  },
  description:
    "A four-room boutique hotel above Ella, Sri Lanka. Private balconies over the valley, sunrise above the mist, breakfast included, Nine Arch Bridge nearby.",
  applicationName: hotel.name,
  authors: [{ name: hotel.name, url: siteUrl }],
  creator: hotel.name,
  publisher: hotel.name,
  category: "travel",
  /**
   * Keywords carry no ranking weight at Google and have not for years.
   * They stay because Yandex still reads them, and Russian guests are
   * the second-largest group in the guest book.
   */
  keywords: [
    "hotel in Ella Sri Lanka",
    "Ella hotels with mountain view",
    "where to stay in Ella",
    "boutique hotel Ella",
    "accommodation near Nine Arch Bridge",
    "hotel near Little Adam's Peak",
    "Scenic View Ella",
  ],
  /**
   * `max-image-preview: large` is the one directive here that changes
   * anything visible. Without it Google shows a thumbnail next to the
   * result; with it a hotel gets a full-width photograph, which is the
   * whole argument for this property.
   */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: { en: "/", ru: "/ru", de: "/de", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: hotel.name,
    locale: "en_GB",
    alternateLocale: ["ru_RU", "de_DE"],
    url: siteUrl,
    title: `${hotel.name} | Hotel with Mountain Views, Ella, Sri Lanka`,
    description:
      "Four rooms above the Ella valley. Private balconies, mist at sunrise, breakfast included, and the hill country at the door.",
    images: [
      {
        url: `/img/${heroImage}.jpg`,
        width: 1800,
        height: 1200,
        alt: `${hotel.name}, a hotel above the valley in Ella, Sri Lanka`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${hotel.name} | Hotel with Mountain Views, Ella, Sri Lanka`,
    description:
      "Four rooms above the Ella valley. Private balconies, mist at sunrise, and the hill country at the door.",
    images: [`/img/${heroImage}.jpg`],
  },
  /* Sri Lankan phone numbers get auto-linked into unwanted blue text
     by Safari unless this is off; the real tel: links are explicit. */
  formatDetection: { telephone: false, address: false, email: false },
};

/** Sets the browser chrome colour and locks the viewport sanely. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e4f5b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${cormorantCyr.variable} ${interCyr.variable}`}
    >
      <head>
        {/* Font Awesome Free. Served from a CDN so the static export
            stays small.

            This stylesheet is render-blocking and it is on a different
            origin, so the browser pays a DNS lookup, a TCP handshake
            and a TLS negotiation before a single byte of CSS arrives.
            The preconnect starts all three while the HTML is still
            parsing, which is worth roughly a third of a second on a
            mobile connection and feeds straight into Largest
            Contentful Paint. */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
