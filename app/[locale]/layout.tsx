import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import { isLocale } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="min-h-screen bg-maroon-50/50 text-maroon-950">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
          <footer className="mx-auto max-w-5xl px-4 py-10 text-xs text-maroon-700/80">
            © {new Date().getFullYear()} Gulnar • Bahrain-first • PWA starter
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
