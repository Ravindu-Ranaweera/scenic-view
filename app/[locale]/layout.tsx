import { notFound } from "next/navigation";

import { HtmlLang } from "@/components/layout/HtmlLang/HtmlLang";
import { altLocales, isLocale } from "@/lib/i18n";

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

  return (
    <>
      {/* The single root layout hard-codes lang="en"; this corrects it
          for assistive technology on the translated pages. */}
      {isLocale(locale) && <HtmlLang locale={locale} />}
      {children}
    </>
  );
}
