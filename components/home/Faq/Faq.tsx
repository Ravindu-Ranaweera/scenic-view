import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionHead } from "@/components/ui/SectionHead/SectionHead";
import { getDict } from "@/content/i18n";
import type { Locale } from "@/lib/i18n";

import styles from "./Faq.module.css";

/**
 * The pre-booking questions, answered on the page.
 *
 * Built on <details> rather than React state, so it stays a server
 * component and, more to the point, so every answer is in the HTML
 * whether or not the visitor opens it. A JavaScript accordion that only
 * injects the answer on click hides that text from anything reading the
 * raw document, which is exactly the text worth being found for.
 *
 * The same strings are emitted as FAQPage structured data by the page
 * that renders this, which is the only configuration Google accepts:
 * marked-up answers must also be visible here.
 */
export function Faq({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);

  return (
    <Section id="faq" tone="mist">
      <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.heading} centered />
      <p className={styles.blurb}>{t.faq.blurb}</p>

      <div className={styles.list}>
        {t.faq.items.map((item, index) => (
          <Reveal key={item.question} variant="up" delay={(index % 4) * 70}>
            <details className={styles.item}>
              <summary className={styles.question}>
                <h3>{item.question}</h3>
                <span className={styles.marker} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
