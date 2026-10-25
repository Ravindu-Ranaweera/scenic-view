import Image from "next/image";

import { Section } from "@/components/ui/Section/Section";
import { SectionHead } from "@/components/ui/SectionHead/SectionHead";
import { getDict } from "@/content/i18n";
import { asset } from "@/lib/assets";
import type { Locale } from "@/lib/i18n";

import styles from "./Gallery.module.css";

/** Three marquee rows, five photos each. The middle row runs the other
 *  way. Order within a row is just a pleasant mix of wide and tall. */
const rows = [
  ["gal-01", "gal-02", "gal-11", "gal-04", "gal-07"],
  ["gal-03", "gal-12", "gal-05", "gal-08", "gal-13"],
  ["gal-09", "gal-14", "gal-06", "gal-10", "gal-15"],
];

export function Gallery({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);

  return (
    <Section id="gallery" tone="mist">
      <SectionHead eyebrow={t.gallery.eyebrow} title={t.gallery.heading} centered />

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
              <div
                key={copy}
                className={styles.track}
                aria-hidden={copy === 1}
              >
                {row.map((src) => (
                  <div key={src} className={styles.tile}>
                    <Image
                      src={asset(`/img/gallery/${src}.jpg`)}
                      alt=""
                      width={640}
                      height={448}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
