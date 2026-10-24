"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { WhatsAppButton } from "@/components/shared/WhatsAppButton/WhatsAppButton";
import { Button } from "@/components/ui/Button/Button";
import { hotel, telHref } from "@/content/hotel";
import { stayExtras } from "@/content/rooms";
import type { Room } from "@/lib/types";
import { useDateRange } from "@/lib/useDateRange";

import styles from "./BookingWidget.module.css";

/**
 * "Check Availability" does not check availability — there is no engine.
 * It carries the dates, party size and chosen extras to the enquiry form
 * on the home page, which pre-fills itself from the query string.
 */
export function BookingWidget({ room }: { room: Room }) {
  const router = useRouter();
  const dates = useDateRange();
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [extras, setExtras] = useState<string[]>([]);

  const toggleExtra = (label: string) =>
    setExtras((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({
      room: room.name,
      checkin: dates.checkIn,
      checkout: dates.checkOut,
      adults,
      children,
    });
    if (extras.length) params.set("extras", extras.join("; "));
    router.push(`/?${params}#contact`);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.widget}>
        <div className={styles.rateHead}>
          <div className={styles.per}>
            Breakfast included &middot; we confirm every booking by hand
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="bkCheckin">Check in</label>
            <input
              id="bkCheckin"
              type="date"
              required
              className={styles.input}
              min={dates.minCheckIn}
              value={dates.checkIn}
              onChange={(event) => dates.setCheckIn(event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="bkCheckout">Check out</label>
            <input
              id="bkCheckout"
              type="date"
              required
              className={styles.input}
              min={dates.minCheckOut}
              value={dates.checkOut}
              onChange={(event) => dates.setCheckOut(event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="bkAdults">Adults</label>
            <select
              id="bkAdults"
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
            <label htmlFor="bkChildren">Children</label>
            <select
              id="bkChildren"
              className={styles.input}
              value={children}
              onChange={(event) => setChildren(event.target.value)}
            >
              {["0", "1", "2", "3"].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className={styles.extras}>
            <h3>Add to your stay</h3>
            {stayExtras.map((extra, index) => {
              const id = `extra-${index}`;
              return (
                <div key={extra.label} className={styles.check}>
                  <input
                    id={id}
                    type="checkbox"
                    checked={extras.includes(extra.label)}
                    onChange={() => toggleExtra(extra.label)}
                  />
                  <label htmlFor={id}>
                    {extra.label}
                    <span>{extra.price}</span>
                  </label>
                </div>
              );
            })}
          </div>

          <Button type="submit" block>
            Check Availability
          </Button>
          <p className={styles.foot}>
            No payment now. We confirm by email first.
          </p>
        </form>
      </div>

      <div className={styles.help}>
        <h3>Rather just ask?</h3>
        <p>
          We answer WhatsApp faster than anything else, usually within the hour.
        </p>
        <a className={styles.call} href={telHref(hotel.phone)}>
          {hotel.phone}
        </a>
        <WhatsAppButton>WhatsApp us</WhatsAppButton>
      </div>
    </div>
  );
}
