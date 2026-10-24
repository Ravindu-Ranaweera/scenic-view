import Image from "next/image";

import { CheckAvailability } from "@/components/home/CheckAvailability/CheckAvailability";
import { ButtonLink } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading/SplitHeading";
import { hotel } from "@/content/hotel";
import { rooms } from "@/content/rooms";
import { heroCopy, heroImage } from "@/content/site";
import { asset } from "@/lib/assets";

import styles from "./Hero.module.css";

export function Hero() {
  const stats = [
    { num: String(hotel.roomCount), label: "Rooms" },
    { num: String(rooms.length), label: "Room types" },
    { num: hotel.rating, label: "Guest rating" },
  ];

  return (
    <section className={styles.hero} id="top">
      <div className={styles.frame}>
        <Image
          src={asset(`/img/${heroImage}.jpg`)}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bg}
        />
        <div className={styles.scrim} />
      </div>

      <Container>
        <div className={styles.inner}>
          <SplitHeading
            as="h1"
            text={heroCopy.heading}
            className={styles.title}
            step={80}
          />

          <div className={styles.foot}>
            <Reveal variant="up" delay={520}>
              <p className={styles.sub}>{hotel.tagline}</p>
            </Reveal>

            <Reveal variant="up" delay={640}>
              <div className={styles.actions}>
                <CheckAvailability />
                <ButtonLink href="/#rooms" variant="outlineLight">
                  View Rooms
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal variant="up" delay={760}>
            <div className={styles.rail}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={`${styles.statNum} u-lining`}>
                    {stat.num}
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
              <span className={styles.cue}>
                <span className={styles.cueLine} aria-hidden="true" />
                Scroll
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
