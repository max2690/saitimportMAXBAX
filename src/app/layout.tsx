import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Импорт из Китая под ключ — MaxBax Import",
  description: "Импорт из Китая под ключ: логистика, закупка, инспекции, таможня. Авиа, авто, ЖД, море. Кейсы, команда, чат‑консультант с ИИ. Премиальный сервис.",
  keywords: ["импорт из Китая", "логистика", "таможня", "поставки из Китая", "авиа доставка", "жд доставка"],
  openGraph: {
    title: "MaxBax Import — Импорт из Китая под ключ",
    description: "Полный цикл: поиск, проверка, покупка, доставка, растаможка.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-brand-bg antialiased">
        {children}
      </body>
    </html>
  );
}
