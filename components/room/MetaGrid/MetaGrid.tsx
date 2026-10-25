import { Icon } from "@/components/ui/Icon/Icon";
import { getDict } from "@/content/i18n";
import type { Room } from "@/lib/types";
import type { Locale } from "@/lib/i18n";

import styles from "./MetaGrid.module.css";

export function MetaGrid({
  room,
  locale = "en",
}: {
  room: Room;
  locale?: Locale;
}) {
  const t = getDict(locale).roomPage;
  const boxes = [
    {
      icon: "fa-solid fa-user-group",
      value: String(room.guests),
      label: t.guests,
    },
    { icon: "fa-solid fa-bed", value: room.beds, label: t.beds },
    { icon: "fa-solid fa-bath", value: room.bathroom, label: t.bathroom },
    { icon: room.outlookIcon, value: room.outlook, label: t.outlook },
    {
      icon: "fa-solid fa-up-right-and-down-left-from-center",
      value: room.size,
      label: t.size,
    },
  ];

  return (
    <div className={styles.grid}>
      {boxes.map((box) => (
        <div key={box.label} className={styles.box}>
          <Icon name={box.icon} />
          <strong>{box.value}</strong>
          <span>{box.label}</span>
        </div>
      ))}
    </div>
  );
}
