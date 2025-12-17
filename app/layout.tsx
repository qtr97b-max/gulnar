import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-maroon-50/50 text-maroon-950">{children}</body>
    </html>
  );
}
