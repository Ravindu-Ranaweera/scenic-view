import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon/Icon";
import { getDict } from "@/content/i18n";
import type { Room } from "@/lib/types";
import { localeHref, type Locale } from "@/lib/i18n";

import styles from "./RoomCard.module.css";
import { asset } from "@/lib/assets";

export function RoomCard({
  room,
  locale = "en",
  compact = false,
}: {
  room: Room;
  locale?: Locale;
  compact?: boolean;
}) {
  const t = getDict(locale).roomCard;
  const href = localeHref(locale, `/rooms/${room.slug}`);

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
          {t.view}
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
            <dt>{t.occupancy}</dt>
            <dd>{t.personsFmt.replace("{n}", String(room.guests))}</dd>
          </div>
          <div>
            <dt>{t.bedType}</dt>
            <dd>{room.beds}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
