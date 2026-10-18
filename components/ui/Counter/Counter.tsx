"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` when scrolled into view.
 *
 * Renders the final value from the start — so it is correct in the static
 * HTML and without JavaScript — and only rewinds to zero inside the
 * observer callback, at the moment it comes into view. Values that are not
 * plain numbers ("[9.1]" while a rating is unconfirmed) never animate.
 */
export function Counter({
  value,
  duration = 1600,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    const target = Number(value);

    if (
      !node ||
      value.trim() === "" ||
      !Number.isFinite(target) ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const decimals = value.includes(".") ? value.split(".")[1].length : 0;
    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo, so it decelerates into the final number
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setDisplay((target * eased).toFixed(decimals));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
