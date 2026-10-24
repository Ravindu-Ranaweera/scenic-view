import Image from "next/image";
import Link from "next/link";

import { NewsletterForm } from "@/components/forms/EnquiryForm/NewsletterForm";
import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { hotel, telHref } from "@/content/hotel";
import { navLinks } from "@/content/site";
import { rooms } from "@/content/rooms";
import { asset } from "@/lib/assets";

import styles from "./Footer.module.css";

export function Footer() {
  const exploreLinks = navLinks.filter((l) => l.href !== "/#contact");

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
            <p className={styles.blurb}>
              A four-room hotel on the hillside above Ella, in Sri
              Lanka&apos;s hill country.
            </p>
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
            <h5>Explore</h5>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Our rooms</h5>
            <ul>
              {rooms.map((room) => (
                <li key={room.slug}>
                  <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Stay in touch</h5>
            <p>Occasional notes on the season and open dates.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            &copy; {new Date().getFullYear()} {hotel.name}. All rights reserved.
          </span>
          <span>{hotel.location}</span>
        </div>
      </Container>
    </footer>
  );
}
