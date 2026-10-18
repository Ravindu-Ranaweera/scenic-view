import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionHead } from "@/components/ui/SectionHead/SectionHead";
import { galleryTiles } from "@/content/site";
import { asset } from "@/lib/assets";

import styles from "./Gallery.module.css";

export function Gallery() {
  return (
    <Section id="gallery" tone="mist">
      <SectionHead
        eyebrow="Gallery"
        title="The hotel, the rooms, the view."
        centered
      />

      <Reveal>
        <div className={styles.grid}>
          {galleryTiles.map((tile) => (
            <div
              key={tile.src}
              className={styles.tile}
              style={{ gridArea: tile.area }}
            >
              <Image
                src={asset(`/img/${tile.src}.jpg`)}
                alt={tile.alt}
                width={900}
                height={700}
              />
              <span className={styles.caption}>{tile.alt}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
