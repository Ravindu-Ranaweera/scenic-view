"use client";

import { useState } from "react";

import { dayAfter, todayISO } from "./dates";

/**
 * A check-in / check-out pair that cannot be in the past, and where
 * check-out is always at least one day after check-in.
 */
export function useDateRange(initialIn = "", initialOut = "") {
  const [checkIn, setCheckIn] = useState(initialIn);
  const [checkOut, setCheckOut] = useState(initialOut);

  const today = todayISO();
  const minCheckOut = checkIn ? dayAfter(checkIn) : today;

  const onCheckInChange = (value: string) => {
    setCheckIn(value);
    if (value && checkOut && checkOut <= value) {
      setCheckOut(dayAfter(value));
    }
  };

  return {
    checkIn,
    checkOut,
    setCheckIn: onCheckInChange,
    setCheckOut,
    minCheckIn: today,
    minCheckOut,
  };
}
