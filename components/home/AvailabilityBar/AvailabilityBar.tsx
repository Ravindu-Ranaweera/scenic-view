"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { hotel } from "@/content/hotel";
import { useDateRange } from "@/lib/useDateRange";

import styles from "./AvailabilityBar.module.css";

/**
 * There is no availability engine behind this, so rather than pretend,
 * it carries the dates and party size down to the enquiry form.
 */
export function AvailabilityBar() {
  const router = useRouter();
  const dates = useDateRange();
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({
      room: "",
      checkin: dates.checkIn,
      checkout: dates.checkOut,
      adults,
      children,
    });
    router.push(`/?${params}#contact`);
  };

  return (
    <div className={styles.band}>
      <Container>
        <form className={styles.grid} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="avCheckin">Check in</label>
            <input
              id="avCheckin"
              type="date"
              required
              className={styles.input}
              min={dates.minCheckIn}
              value={dates.checkIn}
              onChange={(event) => dates.setCheckIn(event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="avCheckout">Check out</label>
            <input
              id="avCheckout"
              type="date"
              required
              className={styles.input}
              min={dates.minCheckOut}
              value={dates.checkOut}
              onChange={(event) => dates.setCheckOut(event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="avAdults">Adults</label>
            <select
              id="avAdults"
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
            <label htmlFor="avChildren">Children</label>
            <select
              id="avChildren"
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
              Check Dates
            </Button>
          </div>
        </form>

        <p className={styles.note}>
          We hold only {hotel.roomCount} rooms, so every booking is confirmed by
          hand, usually within the hour.
        </p>
      </Container>
    </div>
  );
}
