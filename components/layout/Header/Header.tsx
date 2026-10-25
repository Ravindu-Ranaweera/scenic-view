"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { getDict } from "@/content/i18n";
import { bookingUrl, hotel } from "@/content/hotel";
import { asset } from "@/lib/assets";
import {
  localeFromPathname,
  localeHref,
  locales,
  switchLocalePath,
} from "@/lib/i18n";

import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = getDict(locale);
  const isHome = pathname === "/" || pathname === `/${locale}`;

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

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
          <nav className={styles.langs} aria-label="Language">
            {locales.map((code) => (
              <Link
                key={code}
                href={switchLocalePath(pathname, code)}
                className={
                  code === locale
                    ? `${styles.lang} ${styles.langActive}`
                    : styles.lang
                }
                onClick={() => setOpen(false)}
              >
                {code.toUpperCase()}
              </Link>
            ))}
          </nav>

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
