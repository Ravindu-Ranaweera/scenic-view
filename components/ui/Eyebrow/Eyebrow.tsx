import styles from "./Eyebrow.module.css";

export function Eyebrow({
  children,
  onDark = false,
  flush = false,
  centered = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  flush?: boolean;
  centered?: boolean;
}) {
  const classes = [
    styles.eyebrow,
    onDark && styles.onDark,
    flush && styles.flush,
    centered && styles.centered,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
