import { Eyebrow } from "../Eyebrow/Eyebrow";
import { SplitHeading } from "../SplitHeading/SplitHeading";
import styles from "./SectionHead.module.css";

export function SectionHead({
  eyebrow,
  title,
  centered = false,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  centered?: boolean;
  onDark?: boolean;
}) {
  return (
    <div
      className={centered ? `${styles.head} ${styles.centered}` : styles.head}
    >
      <Eyebrow onDark={onDark} centered={centered}>
        {eyebrow}
      </Eyebrow>
      <SplitHeading text={title} />
    </div>
  );
}
