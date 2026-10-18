import { Container } from "../Container/Container";
import styles from "./Section.module.css";

type Tone = "plain" | "mist" | "dark";

export function Section({
  id,
  tone = "plain",
  children,
  className,
}: {
  id?: string;
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  const classes = [
    styles.section,
    tone === "mist" && styles.mist,
    tone === "dark" && styles.dark,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      <Container>{children}</Container>
    </section>
  );
}
