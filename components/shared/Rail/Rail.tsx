"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon/Icon";

import styles from "./Rail.module.css";

/**
 * A single row of cards that slides sideways.
 *
 * Native scroll-snap does the work, so touch and trackpad behave the way
 * people expect; the arrows are there for anyone on a mouse, and hide
 * themselves when everything already fits.
 */
export function Rail({
  children,
  label,
}: {
  children: React.ReactNode;
  /** Names the scrollable region for assistive technology. */
  label: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [progress, setProgress] = useState(0);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    measure();
    el.addEventListener("scroll", measure, { passive: true });

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", measure);
      observer.disconnect();
    };
  }, [measure]);

  /** Move by exactly one card plus its gap. */
  const step = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;

    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    const distance = first ? first.offsetWidth + gap : el.clientWidth * 0.8;

    el.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  const scrollable = canPrev || canNext;

  return (
    <div className={styles.wrap}>
      {scrollable && (
        <div className={styles.bar}>
          <button
            type="button"
            className={styles.btn}
            onClick={() => step(-1)}
            disabled={!canPrev}
            aria-label="Previous"
          >
            <Icon name="fa-solid fa-arrow-left" />
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={() => step(1)}
            disabled={!canNext}
            aria-label="Next"
          >
            <Icon name="fa-solid fa-arrow-right" />
          </button>
        </div>
      )}

      <div
        ref={track}
        className={styles.track}
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {children}
      </div>

      {scrollable && (
        <div className={styles.progress} aria-hidden="true">
          <div
            className={styles.progressBar}
            style={{ transform: `translateX(${progress * 300}%)` }}
          />
        </div>
      )}
    </div>
  );
}
