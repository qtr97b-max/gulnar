"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import clsx from "clsx";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations();
  const pathname = usePathname();

  const switchLocale = locale === "ar" ? "en" : "ar";
  const switched = pathname?.replace(/^\/(ar|en)/, `/${switchLocale}`) ?? `/${switchLocale}`;

  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-maroon-800 text-white font-semibold">
            G
          </span>
          <div className="leading-tight">
            <div className="font-semibold text-maroon-900">{t("appName")}</div>
            <div className="text-xs text-maroon-700/80">{t("tagline")}</div>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <Link className={clsx("rounded-xl px-3 py-2 text-sm", "hover:bg-maroon-50")} href={`/${locale}`}>
            {t("browse")}
          </Link>
          <Link className={clsx("rounded-xl px-3 py-2 text-sm", "hover:bg-maroon-50")} href={`/${locale}/seller`}>
            {t("seller")}
          </Link>
          <Link className={clsx("rounded-xl px-3 py-2 text-sm", "hover:bg-maroon-50")} href={`/${locale}/support`}>
            {t("support")}
          </Link>
          <Link className="rounded-xl border px-3 py-2 text-sm hover:bg-maroon-50" href={switched}>
            {switchLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
