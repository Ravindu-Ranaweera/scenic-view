import { Suspense } from "react";

import { EnquiryForm } from "@/components/forms/EnquiryForm/EnquiryForm";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton/WhatsAppButton";
import { Eyebrow } from "@/components/ui/Eyebrow/Eyebrow";
import { Icon } from "@/components/ui/Icon/Icon";
import { Section } from "@/components/ui/Section/Section";
import { SplitHeading } from "@/components/ui/SplitHeading/SplitHeading";
import { hotel, telHref } from "@/content/hotel";

import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Section id="contact">
      <div className={styles.grid}>
        <div>
          <Eyebrow>Reservations</Eyebrow>
          <SplitHeading text="Book with us directly." />
          <p>
            Booking through us costs less than the agency sites, and you are
            writing to the people who will meet you at the door.
          </p>

          {/* TO REPLACE: every value here comes from content/hotel.ts */}
          <div className={styles.lines}>
            <div className={styles.line}>
              <Icon name="fa-solid fa-location-dot" />
              <div>
                <strong>Address</strong>
                <span>{hotel.address}</span>
              </div>
            </div>

            <div className={styles.line}>
              <Icon name="fa-solid fa-phone" />
              <div>
                <strong>Telephone</strong>
                <a href={telHref(hotel.phone)}>{hotel.phone}</a>
              </div>
            </div>

            <div className={styles.line}>
              <Icon name="fa-solid fa-envelope" />
              <div>
                <strong>Email</strong>
                <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
              </div>
            </div>

            <div className={styles.line}>
              <Icon name="fa-solid fa-clock" />
              <div>
                <strong>Check in / out</strong>
                <span>
                  From {hotel.checkIn} &middot; until {hotel.checkOut}
                </span>
              </div>
            </div>
          </div>

          <WhatsAppButton className={styles.whatsapp} />
        </div>

        {/* EnquiryForm reads the query string during render, which needs a
            boundary so the rest of the page can still prerender statically. */}
        <Suspense fallback={<div className={styles.formFallback} />}>
          <EnquiryForm />
        </Suspense>
      </div>
    </Section>
  );
}
