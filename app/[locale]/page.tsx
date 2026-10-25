import type { Metadata } from "next";

import { HomeContent } from "@/components/pages/HomeContent";
import { getDict } from "@/content/i18n";
import { isLocale } from "@/lib/i18n";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale);

  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/", ru: "/ru", de: "/de", "x-default": "/" },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export default async function LocaleHomePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  return <HomeContent locale={isLocale(locale) ? locale : "en"} />;
}
