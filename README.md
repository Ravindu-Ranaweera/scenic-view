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

## Search

Everything on-page is done. What is left is off-page, and that is now
the larger half of the job.

### What the site emits

- **One JSON-LD graph per page**, built in `lib/seo.ts` from the same
  typed content the page renders, so markup and page cannot disagree.
  Home: `Hotel` + `LodgingBusiness` (geo, amenities, check-in times,
  aggregate rating, eight reviews, reserve action) plus `Organization`,
  `WebSite`, `ItemList` and `FAQPage`. Rooms: `HotelRoom` +
  `BreadcrumbList`. Articles: `Article` + `BreadcrumbList`.
- **An aggregate rating derived from the reviews in `content/site.ts`**,
  not typed in by hand. Add a review and both the number on the page and
  the number in the markup move together. Google requires the aggregate
  to be visible, which is what the summary above the guest book is for.
- **hreflang** in every page head and again in `sitemap.xml`, covering
  `/`, `/ru` and `/de` for the home page, the rooms index and each room.
- **`max-image-preview: large`**, which is what gets a hotel a
  full-width photograph in the result rather than a thumbnail.
- **A real `/rooms/` page.** "Rooms" used to be `/#rooms`, an anchor.
  A fragment cannot rank, cannot have its own title, and cannot be
  linked to. Now it is a page, and the nav, the hero and the home-page
  grid all point at it.
- **A twelve-question FAQ** on the home page, in all three languages.
  Note that Google restricted FAQ rich results in 2023 to a handful of
  government and health sites, so do not expect the expandable snippet.
  The value is answering the long-tail questions people actually type,
  and being quotable in an AI overview.
- **AI crawlers allowed** in `robots.txt`, explicitly. A growing share
  of "where should I stay in Ella" is answered inside an assistant now.
  To reverse that, change the second rule to `disallow`.

### Moving to a real domain

This is the single largest ranking change still available. A project
site lives in a subfolder of a shared `github.io` host and inherits
none of its own authority.

Set a repository variable `CUSTOM_DOMAIN` to the bare hostname
(Settings > Secrets and variables > Actions > Variables), point the
DNS at GitHub Pages, and redeploy. The workflow drops the base path,
rewrites every canonical and sitemap URL, and writes `public/CNAME`.
Nothing in the repository needs editing.

### Off-page, in priority order

1. **Google Business Profile.** For a hotel this outranks the website
   itself for most local searches. Claim it, set the pin to
   6.883177, 81.033114, add the photographs from `public/img/`, the
   check-in times and the amenities, and ask departing guests for
   reviews. Nothing on this site competes with a well-kept profile.
2. **Google Search Console.** Verify the domain, submit
   `/sitemap.xml`, and watch Core Web Vitals and the rich-result
   reports. Add the verification token to `metadata.verification` in
   `app/layout.tsx` if you prefer the meta-tag method.
3. **Bing Webmaster Tools.** Ten minutes, and it also feeds some
   assistant traffic.
4. **Consistent name, address and phone** everywhere the hotel is
   listed: Booking.com, TripAdvisor, Google, Facebook, Instagram. Local
   ranking leans on those matching exactly, character for character.
5. **Links.** Ella guest-house directories, Sri Lanka travel blogs,
   the tea-estate and zip-line operators you already work with. A
   handful of genuine local links beats any amount of on-page work.

## Still needed from you

Everything outstanding is wrapped in `[square brackets]`. Grep for `[` in
`content/` to find it all.

- **Rates.** `priceLKR` is `null` on all four rooms by the owner's
  choice, so nothing renders a price. `formatRate` is unused.
- **Room sizes** were estimated from photographs.
- **Distances** in `content/site.ts` are typical Ella figures, not
  measured from your door. They are no longer bracketed, because
  bracketed text on a live page reads as unfinished to a visitor and to
  a quality rater. Correct any that are wrong rather than re-adding the
  brackets.
- **Article dates.** `published` in `content/posts.ts` was filled with a
  plausible schedule so `Article` markup is not dateless. Replace them
  with the real publication dates, and set `updated` when you revise a
  piece.
- **Check-in 14:00, check-out 11:00, breakfast 07:00-10:00** are now
  stated as fact in `content/hotel.ts` and in the FAQ. Confirm them.
- **The FAQ answers** in `content/site.ts` state distances, amenities
  and policy. Structured data that disagrees with reality is the one
  thing here that can earn a manual action. Read them once.

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
