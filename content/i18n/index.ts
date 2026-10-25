import { facilities, nearby } from "@/content/site";
import { rooms } from "@/content/rooms";
import type { Locale } from "@/lib/i18n";
import type { Room } from "@/lib/types";

import { de } from "./de";
import { en } from "./en";
import { ru } from "./ru";
import type { Dict } from "./types";

const dicts: Record<Locale, Dict> = { en, ru, de };

export const getDict = (locale: Locale): Dict => dicts[locale];

/** The base rooms with the locale's wording merged over them. Icons,
 *  images, sizes and slugs always come from the English source. */
export const getRooms = (locale: Locale): Room[] => {
  if (locale === "en") return rooms;
  const dict = dicts[locale];
  return rooms.map((room) => {
    const copy = dict.rooms[room.slug];
    if (!copy) return room;
    return {
      ...room,
      name: copy.name,
      tagline: copy.tagline,
      intro: copy.intro,
      detail: copy.detail,
      badge: copy.badge,
      beds: copy.beds,
      bathroom: copy.bathroom,
      outlook: copy.outlook,
      amenities: room.amenities.map((amenity, i) => ({
        icon: amenity.icon,
        label: copy.amenities[i] ?? amenity.label,
      })),
    };
  });
};

export const getRoom = (locale: Locale, slug: string) =>
  getRooms(locale).find((room) => room.slug === slug);

/** Facilities with the locale's text over the English icons. */
export const getFacilities = (locale: Locale) =>
  getDict(locale).facilities.items.map((item, i) => ({
    ...facilities[i],
    ...item,
  }));

/** Nearby places with the locale's text over English icons and distances. */
export const getNearby = (locale: Locale) =>
  getDict(locale).nearby.places.map((place, i) => ({
    ...nearby[i],
    ...place,
  }));
