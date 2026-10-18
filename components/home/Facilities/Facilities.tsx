import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionHead } from "@/components/ui/SectionHead/SectionHead";
import { facilities } from "@/content/site";

import styles from "./Facilities.module.css";

export function Facilities() {
  return (
    <Section id="facilities">
      <SectionHead
        eyebrow="Facilities"
        title="What comes with the room."
        centered
      />

      <div className={styles.grid}>
        {facilities.map((facility, index) => (
          <Reveal
            key={facility.title}
            as="div"
            variant="up"
            delay={(index % 4) * 90}
            className={styles.item}
          >
            <span className={styles.icon}>
              <Icon name={facility.icon} />
            </span>
            <h3>{facility.title}</h3>
            <p>{facility.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
