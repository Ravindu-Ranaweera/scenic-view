import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${hotel.name} | Hotel with Mountain Views, Ella, Sri Lanka`,
    template: `%s | ${hotel.name}`,
  },
  description:
    "An eight-room hotel above Ella, Sri Lanka. Private balconies over the valley, sunrise above the mist, and Little Adam's Peak and the Nine Arch Bridge on the doorstep.",
  openGraph: {
    title: `${hotel.name} | Hotel with Mountain Views`,
    description:
      "Eight rooms above the Ella valley. Balconies, mist at sunrise, and the hill country at the door.",
    type: "website",
    images: [`/img/${heroImage}.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* Font Awesome Free. Served from a CDN so the static export stays small. */}
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
