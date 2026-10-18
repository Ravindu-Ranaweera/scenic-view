"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/Icon/Icon";

import styles from "./NewsletterForm.module.css";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className={styles.done}>Thank you. You are on the list.</p>;
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
        placeholder="Email address"
        aria-label="Email address"
        className={styles.input}
      />
      <button type="submit" className={styles.submit} aria-label="Subscribe">
        <Icon name="fa-solid fa-arrow-right" />
      </button>
    </form>
  );
}
