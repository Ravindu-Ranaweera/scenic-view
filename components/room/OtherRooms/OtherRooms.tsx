import { RoomCard } from "@/components/shared/RoomCard/RoomCard";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { getDict } from "@/content/i18n";
import type { Room } from "@/lib/types";
import type { Locale } from "@/lib/i18n";

import styles from "./OtherRooms.module.css";

export function OtherRooms({
  rooms,
  locale = "en",
}: {
  rooms: Room[];
  locale?: Locale;
}) {
  return (
    <div className={styles.wrap}>
      <h2>{getDict(locale).roomPage.otherRooms}</h2>
      <div className={styles.grid}>
        {rooms.map((room, index) => (
          <Reveal key={room.slug} variant="up" delay={index * 110}>
            <RoomCard room={room} locale={locale} compact />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
