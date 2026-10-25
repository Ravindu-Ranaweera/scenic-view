import { notFound } from "next/navigation";

import { altLocales } from "@/lib/i18n";

/** The static export generates exactly /ru and /de. English stays at
 *  the bare routes, so it is deliberately absent here. */
export function generateStaticParams() {
  return altLocales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!(altLocales as readonly string[]).includes(locale)) notFound();
  return children;
}
