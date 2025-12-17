"use client";

import { useState } from "react";

export default function Support({ params }: { params: { locale: string } }) {
  const ar = params.locale === "ar";
  const [msg, setMsg] = useState("");
  const [log, setLog] = useState<Array<{ by: "user" | "ai"; text: string }>>([
    { by: "ai", text: ar ? "هلا! أنا مساعد جلنار. قول لي شنو المشكلة؟" : "Hi! I'm Gulnar Support. Tell me what's wrong." }
  ]);

  function send() {
    if (!msg.trim()) return;
    const userText = msg.trim();
    setLog((l) => [...l, { by: "user", text: userText }]);
    setMsg("");

    // Demo AI behavior: classify & suggest
    const lower = userText.toLowerCase();
    const aiText =
      lower.includes("دفع") || lower.includes("payment")
        ? (ar
            ? "واضح إنها مشكلة دفع. تقدر تجرب الدفع عند الاستلام، أو افتح لك بلاغ دعم. اكتب: (افتح بلاغ) إذا تبي."
            : "Looks like a payment issue. You can use cash on delivery, or I can open a support ticket. Type: (open ticket).")
        : (ar
            ? "تمام. اقدر: (1) أعطيك خطوات حل، (2) أعطيك رقم تواصل، (3) أفتح بلاغ. قول لي شنو تفضل؟"
            : "Got it. I can: (1) troubleshoot steps, (2) provide contact number, (3) open a ticket. Which one?");
    setTimeout(() => setLog((l) => [...l, { by: "ai", text: aiText }]), 350);
  }

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-maroon-900">{ar ? "الدعم الذكي" : "AI Support"}</h1>
      <p className="mt-2 text-sm text-maroon-800/80">
        {ar ? "نسخة MVP: نربطها لاحقًا بـ OpenAI + نظام بلاغات داخل قاعدة البيانات." : "MVP: later we’ll connect OpenAI + a real ticketing system in the DB."}
      </p>

      <div className="mt-4 space-y-3 rounded-2xl border bg-maroon-50/50 p-4">
        {log.map((m, i) => (
          <div key={i} className={"max-w-[85%] rounded-2xl px-4 py-3 text-sm " + (m.by === "user" ? "ms-auto bg-maroon-800 text-white" : "bg-white")}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="flex-1 rounded-2xl border px-3 py-3 text-sm"
          placeholder={ar ? "اكتب مشكلتك..." : "Describe your issue..."}
        />
        <button onClick={send} className="rounded-2xl bg-maroon-800 px-4 py-3 text-sm font-semibold text-white hover:bg-maroon-700">
          {ar ? "إرسال" : "Send"}
        </button>
      </div>
    </div>
  );
}
