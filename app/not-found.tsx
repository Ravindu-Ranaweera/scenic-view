import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";

/* A 404 that gets indexed dilutes the site and shows up as a dead
   result. The HTTP status alone does not cover it here, because a
   static export serves this page as a normal 200 from 404.html on some
   hosts. */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container>
      <div style={{ padding: "14rem 0 8rem", textAlign: "center" }}>
        <h1>Not found</h1>
        <p style={{ margin: "1rem auto 2rem", maxWidth: "32rem" }}>
          That page does not exist. The rooms, the guides to Ella and
          everything else are a click away.
        </p>
        <ButtonLink href="/">Back to the hotel</ButtonLink>
        {/* A 404 is a navigation failure; give the crawler and the
            visitor the real destinations rather than a dead end. */}
        <p style={{ marginTop: "2rem" }}>
          <Link href="/rooms/">Our rooms</Link>
          {" · "}
          <Link href="/journal/">Guides to Ella</Link>
          {" · "}
          <Link href="/#contact">Contact</Link>
        </p>
      </div>
    </Container>
  );
}
