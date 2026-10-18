import { RoomCard } from "@/components/shared/RoomCard/RoomCard";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import type { Room } from "@/lib/types";

import styles from "./OtherRooms.module.css";

export function OtherRooms({ rooms }: { rooms: Room[] }) {
  return (
    <div className={styles.wrap}>
      <h2>The other rooms</h2>
      <div className={styles.grid}>
        {rooms.map((room, index) => (
          <Reveal key={room.slug} variant="up" delay={index * 110}>
            <RoomCard room={room} compact />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
