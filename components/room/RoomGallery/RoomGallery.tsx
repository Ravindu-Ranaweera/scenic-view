"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./RoomGallery.module.css";
import { asset } from "@/lib/assets";

export function RoomGallery({
  images,
  roomName,
}: {
  images: string[];
  roomName: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className={styles.lead}>
        <Image
          src={asset(`/img/${images[active]}.jpg`)}
          alt={`${roomName}, photo ${active + 1}`}
          width={1200}
          height={750}
          priority
        />
      </div>

      <div className={styles.strip}>
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={
              index === active
                ? `${styles.thumb} ${styles.active}`
                : styles.thumb
            }
            aria-current={index === active}
            aria-label={`Show photo ${index + 1} of ${roomName}`}
            onClick={() => setActive(index)}
          >
            <Image
              src={asset(`/img/${image}.jpg`)}
              alt=""
              width={400}
              height={300}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
