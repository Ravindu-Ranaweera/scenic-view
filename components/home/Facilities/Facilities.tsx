import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionHead } from "@/components/ui/SectionHead/SectionHead";
import { getDict, getFacilities } from "@/content/i18n";
import type { Locale } from "@/lib/i18n";

import styles from "./Facilities.module.css";

export function Facilities({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);

  return (
    <Section id="facilities">
      <SectionHead
        eyebrow={t.facilities.eyebrow}
        title={t.facilities.heading}
        centered
      />

      <div className={styles.grid}>
        {getFacilities(locale).map((facility, index) => (
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
