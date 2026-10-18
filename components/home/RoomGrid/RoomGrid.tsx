import { Rail } from "@/components/shared/Rail/Rail";
import { RoomCard } from "@/components/shared/RoomCard/RoomCard";
import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { hotel } from "@/content/hotel";
import { rooms } from "@/content/rooms";

import styles from "./RoomGrid.module.css";

export function RoomGrid() {
  return (
    <Section id="rooms" tone="mist">
      <div className={styles.head}>
        <div>
          <Eyebrow>Rooms</Eyebrow>
          <h2>
            {rooms.length === 5 ? "Five" : rooms.length} kinds of room.{" "}
            {hotel.roomCount} in total.
          </h2>
        </div>
        <p>
          Every room has a mountain view, a private balcony or terrace, a hot
          shower, a television and free Wi-Fi. Breakfast is included; rates are
          shown before taxes.
        </p>
      </div>

      <Rail label="Rooms">
        {rooms.map((room, index) => (
          <Reveal key={room.slug} variant="up" delay={index * 90}>
            <RoomCard room={room} index={index + 1} />
          </Reveal>
        ))}
      </Rail>
    </Section>
  );
}
