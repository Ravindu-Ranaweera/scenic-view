import { Icon } from "@/components/ui/Icon/Icon";
import { whatsappHref } from "@/content/hotel";

import styles from "./WhatsAppButton.module.css";

export function WhatsAppButton({
  children = "Message us on WhatsApp",
  onDark = false,
  className,
}: {
  children?: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  const classes = [styles.cta, onDark && styles.onDark, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="fa-brands fa-whatsapp" />
      {children}
    </a>
  );
}
