# Scenic View Ella

Next.js 16 (App Router, TypeScript, CSS Modules), exported as a static site.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes out/
```

`npm run build` produces `out/` — plain HTML, CSS, JS and images. Upload that
folder anywhere: Netlify, Cloudflare Pages, GitHub Pages, cPanel, S3. No Node
server runs in production.

## Architecture

```
app/
  layout.tsx              fonts, metadata, Header + Footer shell
  page.tsx                home — composes the nine home sections
  rooms/[slug]/page.tsx   one static page per room (generateStaticParams)
  not-found.tsx
  globals.css             design tokens and element defaults, nothing else

content/                  ALL copy, rates and photo choices live here
  hotel.ts                name, contact details, check-in times
  rooms.ts                the four room types, amenities, extras
  site.ts                 nav, facilities, nearby, reviews, gallery, rules

lib/
  types.ts                the shape of every content record
  dates.ts                date helpers
  useDateRange.ts         check-in/check-out pair, shared by three forms

components/
  ui/                     Container, Section, SectionHead, Eyebrow, Button,
                          Icon, Reveal — no domain knowledge
  layout/                 Header, Footer
  home/                   one folder per home-page section
  room/                   PageHero, RoomGallery, MetaGrid, RoomBlock,
                          BookingWidget, OtherRooms
  shared/                 RoomCard, WhatsAppButton — used by both
  forms/                  EnquiryForm, NewsletterForm
```

Each component is a folder holding `Component.tsx` and `Component.module.css`.
Nothing imports another component's stylesheet.

**Server by default.** Only seven components are `"use client"`, each for a
specific reason: Header (scroll state, menu), Reveal (IntersectionObserver),
RoomGallery (thumbnail selection), AvailabilityBar, BookingWidget and
EnquiryForm (form state). Everything else renders at build time.

**Content is separate from presentation.** Change a rate in `content/rooms.ts`
and the home page card, the room page, the sidebar and the other-rooms strip
all update. Add a fifth room to that array and a fifth page is generated, with
no other edit.

## Still needed from you

Everything outstanding is wrapped in `[square brackets]`. Grep for `[` in
`content/` to find it all.

- **Rates.** `priceLKR` is `null` on all four rooms, which renders as
  `LKR [rate]`. Set the numbers in `content/rooms.ts`.
- **Contact details** in `content/hotel.ts`: address, phone, email, and the
  WhatsApp number (digits only, e.g. `94771234567`).
- **Social URLs** — the Instagram, Facebook and TripAdvisor links are `#`.
- **Times and policy**: check-in/out, breakfast hours, pets, cancellation.
- **Room sizes** — I estimated these from photographs.
- **Distances** in `content/site.ts` are typical Ella figures, not measured
  from your door.
- **Reviews.** The three in `content/site.ts` are written placeholders, not
  real guests. Replace them with genuine Booking.com or Google reviews before
  this goes live.
- **`SITE_URL`** in `app/layout.tsx` — set your real domain so social preview
  images resolve.

## The booking form

There is no booking engine. `EnquiryForm` validates and confirms in the
browser; the block to replace is marked `>>> REPLACE from here <<<`.

For a static export the options are an email handler (Formspree, Netlify
Forms — free, ten minutes) or a channel manager (Cloudbeds, Little Hotelier,
Beds24 — ~$50–100/month, real availability, syncs Booking.com). Moving to the
second one means dropping `output: "export"` from `next.config.ts` and hosting
on Vercel or Netlify functions.

The availability bar and the room-page sidebar both carry their dates, party
size and chosen extras into the enquiry form through the query string, which
`EnquiryForm` reads with `useSearchParams`.

## Images

`public/img/` holds 38 web-ready JPEGs, already converted from the camera
originals (HEIC to JPEG, EXIF rotation applied, metadata stripped, long edge
capped at 1800px, progressive, quality 82). 69.2 MB of originals became 8.0 MB.

28 of the 38 are referenced; the rest ship unused (~2 MB) so you can swap
photos by editing `content/`. Delete the ones you will not use before going
live if you want the export smaller.

To add photos: put the originals in `source-photos/<Group>/`, then

```bash
python tools/prepare-images.py
```

`next/image` runs with `unoptimized: true` — the optimiser needs a server, and
these files are already sized.
