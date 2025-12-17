"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Rate({ params }: { params: { locale: string } }) {
  const t = useTranslations();
  const sp = useSearchParams();
  const order = sp.get("order") ?? "—";
  const [stars, setStars] = useState(5);

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm space-y-4">
      <h1 className="text-2xl font-semibold text-maroon-900">{t("rateOrder")}</h1>
      <div className="text-sm text-maroon-700/80">{params.locale === "ar" ? "رقم الطلب:" : "Order:"} {order}</div>

      <div className="rounded-2xl border p-4">
        <div className="text-sm font-semibold text-maroon-900">{t("stars")} (1-5)</div>
        <div className="mt-3 flex gap-2">
          {[1,2,3,4,5].map((s) => (
            <button key={s} onClick={() => setStars(s)} className={"h-11 w-11 rounded-2xl border text-lg " + (stars === s ? "bg-maroon-800 text-white border-maroon-800" : "bg-white hover:bg-maroon-50")}>
              ★
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border p-4">
        <div className="text-sm font-semibold text-maroon-900">{params.locale === "ar" ? "تعليق" : "Comment"}</div>
        <textarea className="mt-2 w-full rounded-2xl border px-3 py-2 text-sm" rows={4} placeholder={params.locale === "ar" ? "الطعم ممتاز..." : "Taste was great..."} />
      </div>

      <button className="w-full rounded-2xl bg-maroon-800 px-4 py-3 text-sm font-semibold text-white hover:bg-maroon-700">
        {t("submit")}
      </button>
    </div>
  );
}
