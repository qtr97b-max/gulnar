import Link from "next/link";
import { useTranslations } from "next-intl";

// Demo data – replace with Supabase fetch
const vendors = [
  { id: "home-1", nameAr: "أم علي - طبخ بيت", nameEn: "Um Ali – Home Kitchen", area: "Muharraq", rating: 4.8 },
  { id: "rest-1", nameAr: "مطعم جلنار", nameEn: "Gulnar Restaurant", area: "Manama", rating: 4.6 }
];

export default function Page({ params }: { params: { locale: string } }) {
  const t = useTranslations();
  const locale = params.locale;

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-maroon-900">{t("appName")}</h1>
        <p className="mt-2 text-maroon-800/80">
          {locale === "ar"
            ? "فكرة جلنار: تجمع طبخ البيت والمطاعم في مكان واحد — استلام أو توصيل — وتقييم لكل طلب."
            : "Gulnar idea: Home cooks + restaurants in one place — pickup or delivery — rate every order."}
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {vendors.map((v) => (
            <Link
              key={v.id}
              href={`/${locale}/v/${v.id}`}
              className="rounded-2xl border bg-maroon-50/50 p-4 hover:bg-maroon-50"
            >
              <div className="text-lg font-semibold text-maroon-900">{locale === "ar" ? v.nameAr : v.nameEn}</div>
              <div className="mt-1 text-sm text-maroon-700/80">{v.area} • ⭐ {v.rating}</div>
              <div className="mt-3 text-xs text-maroon-700/70">
                {locale === "ar" ? "اضغط لعرض المنيو والطلب" : "Tap to view menu & order"}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card title={locale === "ar" ? "الاستلام" : "Pickup"}>
          {locale === "ar"
            ? "تطلب وتستلم بنفسك من البائع مع وقت جاهزية تقريبي."
            : "Order and pick up yourself with an estimated ready time."}
        </Card>
        <Card title={locale === "ar" ? "التوصيل" : "Delivery"}>
          {locale === "ar"
            ? "البائع أو المحل يوصل مع ETA تقديري."
            : "Seller delivers with an estimated ETA."}
        </Card>
        <Card title={locale === "ar" ? "ذكاء الدعم" : "Support AI"}>
          {locale === "ar"
            ? "مساعد يحل المشاكل أو يفتح بلاغ تلقائيًا."
            : "Assistant that helps solve issues or opens a ticket automatically."}
        </Card>
      </section>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border bg-white p-5 shadow-sm">
      <div className="font-semibold text-maroon-900">{title}</div>
      <div className="mt-2 text-sm text-maroon-800/80">{children}</div>
    </div>
  );
}
