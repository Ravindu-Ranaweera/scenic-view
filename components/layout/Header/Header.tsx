"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { getDict } from "@/content/i18n";
import { bookingUrl, hotel } from "@/content/hotel";
import { asset } from "@/lib/assets";
import { localeFromPathname, localeHref, switchLocalePath } from "@/lib/i18n";

import styles from "./Header.module.css";

/** The gb flag stands in for English. */
const LANGUAGES = [
  { code: "en", label: "English", flag: "gb" },
  { code: "ru", label: "Русский", flag: "ru" },
  { code: "de", label: "Deutsch", flag: "de" },
] as const;

export function Header() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = getDict(locale);
  const isHome = pathname === "/" || pathname === `/${locale}`;

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  /* The dropdown closes on a click elsewhere or on Escape. */
  useEffect(() => {
    if (!langOpen) return;
    const onDown = (event: MouseEvent) => {
      if (!langRef.current?.contains(event.target as Node)) setLangOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  useEffect(() => {
    let last = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      /* Hide on the way down, reveal on the way up — but never while
         the mobile menu is open, and never near the top. */
      setHidden(y > 320 && y > last + 4);
      last = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Away from the home page there is no hero behind the header,
     so it needs its solid background from the start. */
  const solid = scrolled || !isHome;
  const classes = [
    styles.header,
    solid && styles.stuck,
    hidden && !open && styles.hidden,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <Container>
        <div className={styles.bar}>
          <Link href={localeHref(locale, "/")} className={styles.brand}>
            <Image
              className={styles.logo}
              src={asset("/img/logo-white.png")}
              alt={hotel.name}
              width={900}
              height={502}
              priority
            />
          </Link>

          <ul
            id="primary-nav"
            className={open ? styles.nav : `${styles.nav} ${styles.navClosed}`}
          >
            {t.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={
                    link.href === "/journal"
                      ? link.href
                      : localeHref(locale, link.href)
                  }
                  className={styles.link}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className={styles.cta}>
              <ButtonLink href={bookingUrl}>{t.bookNow}</ButtonLink>
            </li>
          </ul>

          {/* Outside the collapsible menu, so it is always in the bar. */}
          <div className={styles.langs} ref={langRef}>
            <button
              type="button"
              className={styles.langBtn}
              aria-haspopup="menu"
              aria-expanded={langOpen}
              aria-label="Language"
              onClick={() => setLangOpen((v) => !v)}
            >
              <Image
                className={styles.flag}
                src={asset(
                  `/img/flags/${LANGUAGES.find((l) => l.code === locale)!.flag}.svg`,
                )}
                alt=""
                width={20}
                height={14}
              />
              {locale.toUpperCase()}
              <Icon name="fa-solid fa-chevron-down" />
            </button>

            {langOpen && (
              <ul className={styles.langMenu} role="menu">
                {LANGUAGES.map((lang) => (
                  <li key={lang.code} role="none">
                    <Link
                      role="menuitem"
                      href={switchLocalePath(pathname, lang.code)}
                      className={
                        lang.code === locale
                          ? `${styles.langItem} ${styles.langActive}`
                          : styles.langItem
                      }
                      onClick={() => {
                        setLangOpen(false);
                        setOpen(false);
                      }}
                    >
                      <Image
                        className={styles.flag}
                        src={asset(`/img/flags/${lang.flag}.svg`)}
                        alt=""
                        width={20}
                        height={14}
                      />
                      {lang.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </button>
        </div>
      </Container>
    </header>
  );
}
