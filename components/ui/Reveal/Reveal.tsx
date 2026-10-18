"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./Reveal.module.css";

export type RevealVariant = "up" | "left" | "right" | "scale" | "mask";

/**
 * Reveals its children once, when they first scroll into view.
 *
 * Renders visible and only arms itself after mount, so the content is
 * present in the exported HTML and readable without JavaScript.
 *
 * `delay` staggers siblings — pass index * 90 or so.
 *
 * The "mask" variant wipes the content into view with clip-path, and that
 * needs a second element: IntersectionObserver measures the *clipped* box,
 * so an element that clips itself to zero height can never report itself as
 * intersecting. The observer therefore watches an unclipped wrapper while
 * the clip lives on the child inside it.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const motion = [
    armed && styles.reveal,
    armed && styles[variant],
    armed && visible && styles.visible,
  ]
    .filter(Boolean)
    .join(" ");

  const delayStyle = delay
    ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
    : undefined;

  if (variant === "mask") {
    return (
      <Tag ref={ref as React.Ref<never>} className={className}>
        <div className={`${motion} ${styles.maskBox}`} style={delayStyle}>
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={[motion, className].filter(Boolean).join(" ") || undefined}
      style={delayStyle}
    >
      {children}
    </Tag>
  );
}
