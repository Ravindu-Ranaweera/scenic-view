"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./SplitHeading.module.css";

/**
 * A heading whose words rise into place one after another.
 *
 * The visible text is split into spans, so the accessible name comes
 * from aria-label rather than the fragmented DOM text.
 */
export function SplitHeading({
  text,
  as: Tag = "h2",
  className,
  startDelay = 0,
  step = 70,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  startDelay?: number;
  step?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  /* A "\n" in the text forces a line break; words keep one running
     stagger across all lines. */
  const rows = text.split("\n").map((row) => row.split(" "));
  const classes = [styles.heading, armed && !shown ? "" : styles.in, className]
    .filter(Boolean)
    .join(" ");

  /* Words keep one running stagger across all lines, so each row needs
     to know how many words came before it. */
  const rowOffsets = rows.map((_, rowIndex) =>
    rows.slice(0, rowIndex).reduce((sum, row) => sum + row.length, 0),
  );

  return (
    <Tag ref={ref} className={classes} aria-label={text.replace(/\n/g, " ")}>
      {rows.map((words, rowIndex) => (
        <span key={rowIndex} className={styles.row} aria-hidden="true">
          {words.map((word, index) => {
            const delay = startDelay + (rowOffsets[rowIndex] + index) * step;
            return (
              <span key={`${word}-${index}`}>
                <span className={styles.line}>
                  <span
                    className={styles.word}
                    style={
                      { "--word-delay": `${delay}ms` } as React.CSSProperties
                    }
                  >
                    {word}
                  </span>
                </span>
                {index < words.length - 1 && <span className={styles.space} />}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
