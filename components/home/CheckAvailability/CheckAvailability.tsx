"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/Button/Button";
import { hotel } from "@/content/hotel";
import { useDateRange } from "@/lib/useDateRange";

import styles from "./CheckAvailability.module.css";

/**
 * The hero's "Check Availability" button and the popup it opens.
 *
 * There is no availability engine behind this, so rather than pretend,
 * the popup collects the dates and party size and carries them down
 * to the enquiry form.
 */
export function CheckAvailability() {
  const router = useRouter();
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
    router.push(`/?${params}#contact`);
  };

  return (
    <>
      <Button className={styles.trigger} onClick={() => setOpen(true)}>
        Check Availability
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

            <p className={styles.eyebrow}>Plan your stay</p>
            <h3 id="caTitle" className={styles.title}>
              Check-in details
            </h3>

            <form className={styles.grid} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="caCheckin">Check in</label>
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
                <label htmlFor="caCheckout">Check out</label>
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
                <label htmlFor="caAdults">Adults</label>
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
                <label htmlFor="caChildren">Children</label>
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
                  Check Availability
                </Button>
              </div>
            </form>

            <p className={styles.note}>
              We hold only {hotel.roomCount} rooms, so every booking is
              confirmed by hand, usually within the hour.
            </p>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
