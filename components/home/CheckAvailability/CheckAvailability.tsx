"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/Button/Button";
import { getDict } from "@/content/i18n";
import { hotel } from "@/content/hotel";
import { localeHref, type Locale } from "@/lib/i18n";
import { useDateRange } from "@/lib/useDateRange";

import styles from "./CheckAvailability.module.css";

/**
 * The hero's "Check Availability" button and the popup it opens.
 *
 * There is no availability engine behind this, so rather than pretend,
 * the popup collects the dates and party size and carries them down
 * to the enquiry form.
 */
export function CheckAvailability({ locale = "en" }: { locale?: Locale }) {
  const router = useRouter();
  const t = getDict(locale).popup;
  const dates = useDateRange();
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({
      room: "",
      checkin: dates.checkIn,
      checkout: dates.checkOut,
      adults,
      children,
    });
    setOpen(false);
    router.push(`${localeHref(locale, "/")}?${params}#contact`);
  };

  return (
    <>
      <Button className={styles.trigger} onClick={() => setOpen(true)}>
        {t.submit}
      </Button>

      {/* Portalled to <body>: the hero clips overflow and its Reveal
          wrapper's will-change creates a containing block, so a fixed
          overlay rendered in place would be invisible. */}
      {open &&
        createPortal(
          <div
            className={styles.overlay}
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby="caTitle"
          >
            <button
              type="button"
              className={styles.close}
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h3 id="caTitle" className={styles.title}>
              {t.title}
            </h3>

            <form className={styles.grid} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="caCheckin">{t.checkIn}</label>
                <input
                  id="caCheckin"
                  type="date"
                  required
                  className={styles.input}
                  min={dates.minCheckIn}
                  value={dates.checkIn}
                  onChange={(event) => dates.setCheckIn(event.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="caCheckout">{t.checkOut}</label>
                <input
                  id="caCheckout"
                  type="date"
                  required
                  className={styles.input}
                  min={dates.minCheckOut}
                  value={dates.checkOut}
                  onChange={(event) => dates.setCheckOut(event.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="caAdults">{t.adults}</label>
                <select
                  id="caAdults"
                  className={styles.input}
                  value={adults}
                  onChange={(event) => setAdults(event.target.value)}
                >
                  {["1", "2", "3", "4"].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="caChildren">{t.children}</label>
                <select
                  id="caChildren"
                  className={styles.input}
                  value={children}
                  onChange={(event) => setChildren(event.target.value)}
                >
                  {["0", "1", "2", "3"].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div className={styles.submit}>
                <Button type="submit" block>
                  {t.submit}
                </Button>
              </div>
            </form>

            <p className={styles.note}>
              {t.noteFmt.replace("{n}", String(hotel.roomCount))}
            </p>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
