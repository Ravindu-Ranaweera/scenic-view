import styles from "./Divider.module.css";

export function Divider({ onDark = false }: { onDark?: boolean }) {
  return (
    <hr className={onDark ? `${styles.rule} ${styles.onDark}` : styles.rule} />
  );
}
