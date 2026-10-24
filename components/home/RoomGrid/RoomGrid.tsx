import { Rail } from "@/components/shared/Rail/Rail";
import { RoomCard } from "@/components/shared/RoomCard/RoomCard";
import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { rooms } from "@/content/rooms";

import styles from "./RoomGrid.module.css";

export function RoomGrid() {
  return (
    <Section id="rooms" tone="mist">
      <div className={styles.head}>
        <div>
          <Eyebrow>Rooms</Eyebrow>
          <h2>
            {["No", "One", "Two", "Three", "Four", "Five"][rooms.length] ??
              rooms.length}{" "}
            rooms. Every one facing the mountains.
          </h2>
        </div>
        <p>
          Every room has a mountain view, a private balcony or terrace, a hot
          shower, a television and free Wi-Fi. Breakfast is included with
          every room.
        </p>
      </div>

      <Rail label="Rooms" perView={2}>
        {rooms.map((room, index) => (
          <Reveal key={room.slug} variant="up" delay={(index % 2) * 90}>
            <RoomCard room={room} />
          </Reveal>
        ))}
      </Rail>
    </Section>
  );
}
