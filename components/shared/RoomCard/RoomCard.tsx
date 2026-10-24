import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon/Icon";
import type { Room } from "@/lib/types";

import styles from "./RoomCard.module.css";
import { asset } from "@/lib/assets";

export function RoomCard({
  room,
  compact = false,
}: {
  room: Room;
  /** Kept for callers that still pass it. No longer rendered. */
  index?: number;
  compact?: boolean;
}) {
  const href = `/rooms/${room.slug}`;

  return (
    <article
      className={compact ? `${styles.card} ${styles.compact}` : styles.card}
    >
      <div className={styles.media}>
        <Image
          src={asset(`/img/${room.images[0]}.jpg`)}
          alt=""
          width={960}
          height={640}
        />
        <span className={styles.view} aria-hidden="true">
          View
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3>
            <Link href={href}>{room.name}</Link>
          </h3>
          <span className={styles.arrow} aria-hidden="true">
            <Icon name="fa-solid fa-arrow-right" />
          </span>
        </div>

        <dl className={styles.facts}>
          <div>
            <dt>Occupancy</dt>
            <dd>
              {room.guests} {room.guests === 1 ? "Person" : "Persons"}
            </dd>
          </div>
          <div>
            <dt>Bed Type</dt>
            <dd>{room.beds}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
