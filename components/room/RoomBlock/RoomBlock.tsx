import styles from "./RoomBlock.module.css";

export function RoomBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.block}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export { styles as roomBlockStyles };
