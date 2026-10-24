"use client";

import { useState } from "react";

import styles from "./Testimonials.module.css";

/** Reviews longer than this clamp to a few lines behind a Read more. */
const CLAMP_AT = 190;

export function ReviewQuote({ quote }: { quote: string }) {
  const long = quote.length > CLAMP_AT;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.quoteWrap}>
      <blockquote
        className={long && !open ? `${styles.quote} ${styles.clamped}` : styles.quote}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      {long && (
        <button
          type="button"
          className={styles.more}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
