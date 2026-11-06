"use client";

/**
 * Sets <html lang> for the Russian and German pages.
 *
 * The app has one root layout, and a root layout has no params, so the
 * `lang` attribute is written once at build time as "en". The clean
 * framework fix is two root layouts in route groups, which means every
 * route file moves and the 404 has to be duplicated per group. That is
 * a lot of churn for the benefit, because Google has said it determines
 * page language from the visible content and ignores this attribute;
 * the hreflang links in the metadata are what it actually reads.
 *
 * The attribute still matters for screen readers, which switch voice
 * and pronunciation rules on it, and for the browser's own translate
 * prompt. Both run JavaScript, so correcting it on mount serves them
 * properly at a fraction of the cost.
 *
 * Renders nothing.
 */
import { useEffect } from "react";

import type { Locale } from "@/lib/i18n";

export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
