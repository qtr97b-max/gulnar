export default function Seller({ params }: { params: { locale: string } }) {
  const ar = params.locale === "ar";
  return (
    <div className="space-y-5">
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-maroon-900">{ar ? "بوابة البائع" : "Seller Portal"}</h1>
        <p className="mt-2 text-sm text-maroon-800/80">
          {ar
            ? "هنا البائع يضيف الأكلات، يحدد الاستلام/التوصيل، ويرد على الطلبات. (نسخة MVP)"
            : "Here the seller adds items, sets pickup/delivery, and manages orders. (MVP)"}
        </p>
        <ul className="mt-4 list-disc ps-5 text-sm text-maroon-800/80 space-y-1">
          <li>{ar ? "إدارة المنيو (إضافة/تعديل/إخفاء)" : "Menu management (add/edit/hide)"}</li>
          <li>{ar ? "تحديد وقت جاهزية/ETA" : "Set ready time / ETA"}</li>
          <li>{ar ? "تأكيد الطلب أو رفضه" : "Accept or reject orders"}</li>
        </ul>
      </div>

      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-maroon-900">{ar ? "الخطوة التالية" : "Next step"}</h2>
        <p className="mt-2 text-sm text-maroon-800/80">
          {ar
            ? "نربط Supabase عشان تصير البيانات حقيقية وتشتغل الحسابات والطلبات."
            : "We’ll connect Supabase to make data real and enable accounts & orders."}
        </p>
      </div>
    </div>
  );
}
