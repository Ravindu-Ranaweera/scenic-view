"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NewsletterForm } from "@/components/forms/EnquiryForm/NewsletterForm";
import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { getDict, getRooms } from "@/content/i18n";
import { hotel, telHref } from "@/content/hotel";
import { asset } from "@/lib/assets";
import { localeFromPathname, localeHref } from "@/lib/i18n";

import styles from "./Footer.module.css";

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = getDict(locale);
  const exploreLinks = t.nav.filter((l) => l.href !== "/#contact");

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <Image
              className={styles.logo}
              src={asset("/img/logo-white.png")}
              alt={hotel.name}
              width={900}
              height={502}
            />
            <p className={styles.blurb}>{t.footer.blurb}</p>
            <address className={styles.address}>
              {hotel.street}
              <br />
              {hotel.town} {hotel.postcode}
              <br />
              <a href={telHref(hotel.phone)}>{hotel.phone}</a>
              <br />
              <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
            </address>
            <div className={styles.social}>
              {hotel.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <Icon name={item.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5>{t.footer.explore}</h5>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={
                      link.href === "/journal"
                        ? link.href
                        : localeHref(locale, link.href)
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>{t.footer.ourRooms}</h5>
            <ul>
              {getRooms(locale).map((room) => (
                <li key={room.slug}>
                  <Link href={localeHref(locale, `/rooms/${room.slug}`)}>
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>{t.footer.stayInTouch}</h5>
            <p>{t.footer.newsBlurb}</p>
            <NewsletterForm
              placeholder={t.footer.emailPlaceholder}
              subscribe={t.footer.subscribe}
              subscribed={t.footer.subscribed}
            />
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            &copy; {new Date().getFullYear()} {hotel.name}. {t.footer.rights}
          </span>
          <span>{hotel.location}</span>
        </div>
      </Container>
    </footer>
  );
}
