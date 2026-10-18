import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon/Icon";
import { formatRate } from "@/content/rooms";
import type { Room } from "@/lib/types";

import styles from "./RoomCard.module.css";
import { asset } from "@/lib/assets";

export function RoomCard({
  room,
  index,
  compact = false,
}: {
  room: Room;
  /** 1-based; shown as 01, 02 … Omit on the compact variant. */
  index?: number;
  compact?: boolean;
}) {
  const href = `/rooms/${room.slug}`;
  const meta = room.cardMeta.map((item) => item.label).join(" · ");

  return (
    <article
      className={compact ? `${styles.card} ${styles.compact}` : styles.card}
    >
      <div className={styles.media}>
        <Image
          src={asset(`/img/${room.images[0]}.jpg`)}
          alt=""
          width={800}
          height={1066}
        />
        <span className={styles.scrim} />
      </div>

      {index !== undefined && (
        <span className={styles.index}>{String(index).padStart(2, "0")}</span>
      )}

      <div className={styles.body}>
        <span className={styles.badge}>{room.badge}</span>

        <h3>
          <Link href={href}>{room.name}</Link>
        </h3>

        {/* No blurb here: it pushed the dark panel over half the
            photograph. The description lives on the room page. */}
        {!compact && <div className={styles.meta}>{meta}</div>}

        <div className={styles.foot}>
          <span className={styles.rate}>
            {formatRate(room.priceLKR)}
            <small>per night</small>
          </span>
          <span className={styles.cue}>
            View <Icon name="fa-solid fa-arrow-right" />
          </span>
        </div>
      </div>
    </article>
  );
}
