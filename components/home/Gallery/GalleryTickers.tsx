"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Icon } from "@/components/ui/Icon/Icon";
import { asset } from "@/lib/assets";

import styles from "./Gallery.module.css";

/** Three marquee rows, five photos each. The middle row runs the other
 *  way. Order within a row is just a pleasant mix of wide and tall. */
const rows = [
  ["gal-01", "gal-02", "gal-11", "gal-04", "gal-07"],
  ["gal-03", "gal-12", "gal-05", "gal-08", "gal-13"],
  ["gal-09", "gal-14", "gal-06", "gal-10", "gal-15"],
];

const all = rows.flat();

export function GalleryTickers() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight")
        setActive((v) => (v === null ? v : (v + 1) % all.length));
      if (event.key === "ArrowLeft")
        setActive((v) => (v === null ? v : (v + all.length - 1) % all.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const step = (direction: 1 | -1) =>
    setActive((v) =>
      v === null ? v : (v + direction + all.length) % all.length,
    );

  return (
    <>
      <div className={styles.tickers}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={
              rowIndex === 1
                ? `${styles.ticker} ${styles.reverse}`
                : styles.ticker
            }
          >
            {/* The row twice over: the animation slides one row-width,
                so the second copy makes the loop seamless. */}
            {[0, 1].map((copy) => (
              <div key={copy} className={styles.track} aria-hidden={copy === 1}>
                {row.map((src) => (
                  <button
                    key={src}
                    type="button"
                    className={styles.tile}
                    aria-label="Open photo"
                    tabIndex={copy === 1 ? -1 : 0}
                    onClick={() => setActive(all.indexOf(src))}
                  >
                    <Image
                      src={asset(`/img/gallery/${src}.jpg`)}
                      alt=""
                      width={640}
                      height={448}
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {active !== null &&
        createPortal(
          <div
            className={styles.lightbox}
            onClick={(event) => {
              if (event.target === event.currentTarget) setActive(null);
            }}
          >
            <button
              type="button"
              className={styles.close}
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ×
            </button>

            <button
              type="button"
              className={`${styles.nav} ${styles.prev}`}
              aria-label="Previous photo"
              onClick={() => step(-1)}
            >
              <Icon name="fa-solid fa-arrow-left" />
            </button>

            <figure className={styles.frame}>
              <Image
                src={asset(`/img/gallery/${all[active]}.jpg`)}
                alt=""
                width={1100}
                height={825}
              />
              <figcaption className={styles.counter}>
                {active + 1} / {all.length}
              </figcaption>
            </figure>

            <button
              type="button"
              className={`${styles.nav} ${styles.next}`}
              aria-label="Next photo"
              onClick={() => step(1)}
            >
              <Icon name="fa-solid fa-arrow-right" />
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}
