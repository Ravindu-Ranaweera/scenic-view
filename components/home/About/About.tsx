import Image from "next/image";

import { Counter } from "@/components/ui/Counter/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SplitHeading } from "@/components/ui/SplitHeading/SplitHeading";
import { hotel } from "@/content/hotel";
import { rooms } from "@/content/rooms";
import { aboutCopy } from "@/content/site";
import { asset } from "@/lib/assets";

import styles from "./About.module.css";

export function About() {
  const [lead, ...rest] = aboutCopy.paragraphs;

  const facts = [
    { num: String(hotel.roomCount), label: "Rooms only" },
    { num: String(rooms.length), label: "Room types" },
    { num: hotel.rating, label: "Guest rating" },
  ];

  return (
    <Section id="about">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <Reveal variant="up">
            <Eyebrow centered>The Hotel</Eyebrow>
          </Reveal>

          <SplitHeading text={aboutCopy.heading} />

          <Reveal variant="up" delay={160}>
            <div>
              <p className={styles.lead}>{lead}</p>
              {rest.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal variant="up" delay={240}>
            <div className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label}>
                  <span className={styles.num}>
                    <Counter value={fact.num} />
                  </span>
                  <span className={styles.label}>{fact.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className={styles.figures}>
          <div className={styles.arch}>
            <span className={styles.outline} aria-hidden="true" />

            <Reveal variant="mask" className={styles.photo}>
              <Image
                src={asset("/img/view-03.jpg")}
                alt={`${hotel.name} seen from the hillside`}
                width={720}
                height={1152}
              />
            </Reveal>

            <Reveal variant="mask" delay={280} className={styles.disc}>
              <Image
                src={asset("/img/view-04.jpg")}
                alt="Balcony looking out towards the mountains"
                width={400}
                height={400}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
