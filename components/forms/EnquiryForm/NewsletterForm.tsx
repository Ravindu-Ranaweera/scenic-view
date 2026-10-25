"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/Icon/Icon";

import styles from "./NewsletterForm.module.css";

export function NewsletterForm({
  placeholder = "Email address",
  subscribe = "Subscribe",
  subscribed = "Thank you. You are on the list.",
}: {
  placeholder?: string;
  subscribe?: string;
  subscribed?: string;
}) {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className={styles.done}>{subscribed}</p>;
  }

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        // REPLACE: post to Mailchimp / Brevo / your list provider.
        setDone(true);
      }}
    >
      <input
        type="email"
        name="email"
        required
        placeholder={placeholder}
        aria-label={placeholder}
        className={styles.input}
      />
      <button type="submit" className={styles.submit} aria-label={subscribe}>
        <Icon name="fa-solid fa-arrow-right" />
      </button>
    </form>
  );
}
