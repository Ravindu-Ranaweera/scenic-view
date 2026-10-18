"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import { rooms } from "@/content/rooms";
import { useDateRange } from "@/lib/useDateRange";

import styles from "./EnquiryForm.module.css";

type Status = { message: string; isError: boolean };

const DEFAULT_STATUS: Status = {
  message: "We reply to every enquiry within a day, usually much sooner.",
  isError: false,
};

/**
 * The enquiry form.
 *
 * There is no booking engine behind this. Submitting validates and confirms
 * locally so the page is usable today; swap the marked block for a POST to
 * Formspree, Netlify Forms or your own handler when you choose one.
 *
 * It also accepts the query string the room-page booking widget sends
 * (?room=&checkin=&checkout=&adults=&children=&extras=) and pre-fills itself.
 * useSearchParams is read during render, so the component must sit inside a
 * Suspense boundary — see Contact.tsx.
 */
/** Builds the opening message from the party size and any chosen extras. */
function messageFrom(params: URLSearchParams) {
  const parts: string[] = [];
  const adults = params.get("adults");
  const children = params.get("children");
  const extras = params.get("extras");

  if (adults) parts.push(`${adults} adult(s)`);
  if (children && children !== "0") parts.push(`${children} child(ren)`);
  if (extras) parts.push(`Interested in: ${extras}`);

  return parts.length ? `${parts.join(". ")}.` : "";
}

export function EnquiryForm() {
  const params = useSearchParams();

  const dates = useDateRange(
    params.get("checkin") ?? "",
    params.get("checkout") ?? "",
  );
  const [room, setRoom] = useState(() => params.get("room") ?? "");
  const [message, setMessage] = useState(() => messageFrom(params));
  const [status, setStatus] = useState<Status>(DEFAULT_STATUS);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus({
        message: "Please fill in your name and a valid email address.",
        isError: true,
      });
      return;
    }

    // >>> REPLACE from here with a real submission <<<
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Enquiry (not yet sent anywhere):", data);

    setStatus({
      message:
        "Thank you. Your enquiry is noted and we will reply within a day.",
      isError: false,
    });
    form.reset();
    setRoom("");
    setMessage("");
    // >>> to here <<<
  };

  return (
    <div className={styles.card}>
      <h3>Enquire about a stay</h3>
      <p className={styles.cardNote}>
        No payment now. We read every message ourselves and reply by email.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="eqName">Your name</label>
            <input
              id="eqName"
              name="name"
              type="text"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="eqEmail">Email address</label>
            <input
              id="eqEmail"
              name="email"
              type="email"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="eqPhone">Phone / WhatsApp</label>
            <input
              id="eqPhone"
              name="phone"
              type="tel"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="eqRoom">Room of interest</label>
            <select
              id="eqRoom"
              name="room"
              className={styles.input}
              value={room}
              onChange={(event) => setRoom(event.target.value)}
            >
              <option value="">No preference yet</option>
              {rooms.map((r) => (
                <option key={r.slug} value={r.name}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="eqCheckin">Arriving</label>
            <input
              id="eqCheckin"
              name="checkin"
              type="date"
              className={styles.input}
              min={dates.minCheckIn}
              value={dates.checkIn}
              onChange={(event) => dates.setCheckIn(event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="eqCheckout">Leaving</label>
            <input
              id="eqCheckout"
              name="checkout"
              type="date"
              className={styles.input}
              min={dates.minCheckOut}
              value={dates.checkOut}
              onChange={(event) => dates.setCheckOut(event.target.value)}
            />
          </div>

          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="eqMessage">Anything we should know?</label>
            <textarea
              id="eqMessage"
              name="message"
              rows={4}
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Arrival time, diets, a celebration?"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <Button type="submit" block>
          Send Enquiry
        </Button>

        <p
          className={
            status.isError ? `${styles.status} ${styles.error}` : styles.status
          }
          role="status"
        >
          {status.message}
        </p>
      </form>
    </div>
  );
}
