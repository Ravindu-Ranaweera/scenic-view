/**
 * Locale plumbing for the static export.
 *
 * English lives at the root URLs exactly as before. Russian and German
 * are generated under /ru and /de by the app/[locale] segment. The
 * journal stays English-only, so locale links to it fall back to the
 * English path.
 */
export const locales = ["en", "ru", "de"] as const;

export type Locale = (typeof locales)[number];

/** The locales generated under app/[locale] (everything but English). */
export const altLocales = ["ru", "de"] as const;

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Prefixes a site path with the locale segment. English stays bare. */
export const localeHref = (locale: Locale, path: string) => {
  if (locale === "en") return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
};

/** Reads the locale out of a pathname (basePath already stripped). */
export const localeFromPathname = (pathname: string): Locale => {
  const first = pathname.split("/")[1];
  return first === "ru" || first === "de" ? first : "en";
};

/** The same pathname in another locale, for the language switcher. */
export const switchLocalePath = (pathname: string, target: Locale) => {
  const current = localeFromPathname(pathname);
  const bare =
    current === "en" ? pathname : pathname.slice(current.length + 1) || "/";
  /* Only the home and room pages exist in every language. */
  const translated = bare === "/" || bare.startsWith("/rooms/");
  return localeHref(target, translated ? bare : "/");
};
