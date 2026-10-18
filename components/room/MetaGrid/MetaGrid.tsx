import { Icon } from "@/components/ui/Icon/Icon";
import type { Room } from "@/lib/types";

import styles from "./MetaGrid.module.css";

export function MetaGrid({ room }: { room: Room }) {
  const boxes = [
    {
      icon: "fa-solid fa-user-group",
      value: String(room.guests),
      label: "Guests",
    },
    { icon: "fa-solid fa-bed", value: room.beds, label: "Beds" },
    { icon: "fa-solid fa-bath", value: room.bathroom, label: "Bathroom" },
    { icon: room.outlookIcon, value: room.outlook, label: "Outlook" },
    {
      icon: "fa-solid fa-up-right-and-down-left-from-center",
      value: room.size,
      label: "Size",
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
