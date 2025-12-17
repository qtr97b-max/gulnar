"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const demoMenu = [
  { id: "m1", nameAr: "مجبوس دجاج", nameEn: "Chicken Machboos", price: 2.8 },
  { id: "m2", nameAr: "هريس", nameEn: "Harees", price: 2.3 },
  { id: "m3", nameAr: "كبة", nameEn: "Kibbeh", price: 1.9 }
];

export default function VendorPage({ params }: { params: { locale: string; id: string } }) {
  const { locale } = params;
  const t = useTranslations();

  const [cart, setCart] = useState<Record<string, number>>({});
  const count = useMemo(() => Object.values(cart).reduce((a, b) => a + b, 0), [cart]);
  const total = useMemo(
    () => demoMenu.reduce((sum, m) => sum + (cart[m.id] ?? 0) * m.price, 0),
    [cart]
  );

  return (
    <div className="space-y-5">
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <div className="text-sm text-maroon-700/80">{locale === "ar" ? "البائع" : "Vendor"} • {params.id}</div>
        <h2 className="mt-1 text-2xl font-semibold text-maroon-900">
          {locale === "ar" ? "منيو جلنار" : "Gulnar Menu"}
        </h2>

        <div className="mt-4 grid gap-3">
          {demoMenu.map((m) => (
            <div key={m.id} className="flex items-center justify-between rounded-2xl border bg-maroon-50/50 p-4">
              <div>
                <div className="font-semibold text-maroon-900">{locale === "ar" ? m.nameAr : m.nameEn}</div>
                <div className="text-sm text-maroon-700/80">{m.price.toFixed(2)} BHD</div>
              </div>
              <button
                onClick={() => setCart((c) => ({ ...c, [m.id]: (c[m.id] ?? 0) + 1 }))}
                className="rounded-2xl bg-maroon-800 px-4 py-2 text-sm font-semibold text-white hover:bg-maroon-700"
              >
                {t("addToCart")}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border bg-white p-4">
          <div className="text-sm text-maroon-800/80">
            {locale === "ar" ? "في السلة:" : "In cart:"} <span className="font-semibold">{count}</span> •{" "}
            {locale === "ar" ? "المجموع:" : "Total:"} <span className="font-semibold">{total.toFixed(2)} BHD</span>
          </div>
          <Link
            href={`/${locale}/checkout?total=${total.toFixed(2)}`}
            className="rounded-2xl border px-4 py-2 text-sm font-semibold hover:bg-maroon-50"
          >
            {t("checkout")}
          </Link>
        </div>
      </div>
    </div>
  );
}
