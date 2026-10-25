import { Section } from "@/components/ui/Section/Section";
import { SectionHead } from "@/components/ui/SectionHead/SectionHead";
import { getDict } from "@/content/i18n";
import type { Locale } from "@/lib/i18n";

import { GalleryTickers } from "./GalleryTickers";

export function Gallery({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);

  return (
    <Section id="gallery" tone="mist">
      <SectionHead eyebrow={t.gallery.eyebrow} title={t.gallery.heading} centered />
      <GalleryTickers />
    </Section>
  );
}
