"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Checkout({ params }: { params: { locale: string } }) {
  const t = useTranslations();
  const sp = useSearchParams();
  const router = useRouter();
  const total = sp.get("total") ?? "0.00";

  const [type, setType] = useState<"pickup" | "delivery">("pickup");
  const [pay, setPay] = useState<"cod" | "online" | "wallet">("cod");
  const [eta, setEta] = useState("40");

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm space-y-4">
      <h1 className="text-2xl font-semibold text-maroon-900">{t("checkout")}</h1>

      <div className="rounded-2xl border bg-maroon-50/50 p-4 text-sm text-maroon-800/80">
        {params.locale === "ar" ? "مبلغ الطلب (تجريبي):" : "Order total (demo):"}{" "}
        <span className="font-semibold">{total} BHD</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field title={params.locale === "ar" ? "نوع الطلب" : "Order type"}>
          <div className="flex gap-2">
            <Chip onClick={() => setType("pickup")} active={type === "pickup"} label={t("pickup")} />
            <Chip onClick={() => setType("delivery")} active={type === "delivery"} label={t("delivery")} />
          </div>
        </Field>

        <Field title={params.locale === "ar" ? "طريقة الدفع" : "Payment"}>
          <div className="flex flex-wrap gap-2">
            <Chip onClick={() => setPay("online")} active={pay === "online"} label={t("online")} />
            <Chip onClick={() => setPay("cod")} active={pay === "cod"} label={t("cod")} />
            <Chip onClick={() => setPay("wallet")} active={pay === "wallet"} label={t("wallet")} />
          </div>
        </Field>

        <Field title={params.locale === "ar" ? "وقت تقريبي (دقيقة)" : "Estimated time (minutes)"}>
          <input
            value={eta}
            onChange={(e) => setEta(e.target.value)}
            className="w-full rounded-2xl border px-3 py-2 text-sm"
            inputMode="numeric"
          />
        </Field>

        <Field title={params.locale === "ar" ? "ملاحظة" : "Note"}>
          <input className="w-full rounded-2xl border px-3 py-2 text-sm" placeholder={params.locale === "ar" ? "بدون بصل..." : "No onions..."} />
        </Field>
      </div>

      <button
        onClick={() => router.push(`/${params.locale}/rate?order=demo123`)}
        className="w-full rounded-2xl bg-maroon-800 px-4 py-3 text-sm font-semibold text-white hover:bg-maroon-700"
      >
        {t("placeOrder")}
      </button>

      <p className="text-xs text-maroon-700/80">
        {params.locale === "ar"
          ? "هذا MVP تجريبي: نربط الدفع + التوصيل + قاعدة البيانات في الخطوات التالية."
          : "This is a demo MVP: we’ll wire payments + delivery + database in the next steps."}
      </p>
    </div>
  );
}

function Field({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="text-sm font-semibold text-maroon-900">{title}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Chip({ label, active, onClick }: { label: string; active?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-2xl px-3 py-2 text-sm border " +
        (active ? "bg-maroon-800 text-white border-maroon-800" : "bg-white hover:bg-maroon-50")
      }
    >
      {label}
    </button>
  );
}
