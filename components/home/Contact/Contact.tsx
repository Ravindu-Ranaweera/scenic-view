import { Suspense } from "react";

import { EnquiryForm } from "@/components/forms/EnquiryForm/EnquiryForm";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton/WhatsAppButton";
import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Icon } from "@/components/ui/Icon/Icon";
import { Section } from "@/components/ui/Section/Section";
import { SplitHeading } from "@/components/ui/SplitHeading/SplitHeading";
import { ButtonLink } from "@/components/ui/Button/Button";
import { getDict } from "@/content/i18n";
import { hotel, telHref } from "@/content/hotel";
import type { Locale } from "@/lib/i18n";

import styles from "./Contact.module.css";

export function Contact({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);
  const checkTimes = t.contact.fromUntilFmt
    .replace("{in}", hotel.checkIn)
    .replace("{out}", hotel.checkOut);

  return (
    <Section id="contact">
      <div className={styles.grid}>
        <div>
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <SplitHeading text={t.contact.heading} />
          <p>{t.contact.blurb}</p>

          {/* TO REPLACE: every value here comes from content/hotel.ts */}
          <div className={styles.lines}>
            <div className={styles.line}>
              <Icon name="fa-solid fa-location-dot" />
              <div>
                <strong>{t.contact.address}</strong>
                <span>{hotel.address}</span>
              </div>
            </div>

            <div className={styles.line}>
              <Icon name="fa-solid fa-phone" />
              <div>
                <strong>{t.contact.telephone}</strong>
                <a href={telHref(hotel.phone)}>{hotel.phone}</a>
              </div>
            </div>

            <div className={styles.line}>
              <Icon name="fa-solid fa-envelope" />
              <div>
                <strong>{t.contact.email}</strong>
                <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
              </div>
            </div>

            <div className={styles.line}>
              <Icon name="fa-solid fa-clock" />
              <div>
                <strong>{t.contact.checkInOut}</strong>
                <span>{checkTimes}</span>
              </div>
            </div>
          </div>

          <WhatsAppButton className={styles.whatsapp}>
            {t.whatsappMessage}
          </WhatsAppButton>
        </div>

        {/* EnquiryForm reads the query string during render, which needs a
            boundary so the rest of the page can still prerender statically. */}
        <Suspense fallback={<div className={styles.formFallback} />}>
          <EnquiryForm locale={locale} />
        </Suspense>
      </div>

      <div className={styles.map}>
        <iframe
          title={t.contact.mapTitle}
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            `${hotel.name}, ${hotel.address}`,
          )}&output=embed`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        <ButtonLink
          className={styles.directions}
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            `${hotel.name}, ${hotel.address}`,
          )}`}
        >
          {t.contact.directions}
        </ButtonLink>
      </div>
    </Section>
  );
}
