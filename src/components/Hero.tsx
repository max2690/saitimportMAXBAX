'use client';
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [fallback, setFallback] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[90vh] md:min-h-[92vh]">
      {/* Фон: видео + постер */}
      {!fallback ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src="/video/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero/hero-main-1920.jpg"
          onError={() => setFallback(true)}
          style={{ objectPosition: "50% 60%" }}
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/hero-main-1920.jpg')", backgroundPosition: "50% 60%" }}
        />
      )}

      {/* Деликатные градиенты для читаемости */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/22 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg/55" />
      </div>

      {/* Контент — опущен вниз (≈1–2 см) */}
      <div className="relative z-10 mx-auto h-full max-w-7xl px-6 pt-20 md:pt-28">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="hero-heading"
            >
              Импорт из Китая<br className="hidden sm:block" />
              под ключ
            </motion.h1>

            <motion.p
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="mt-4 max-w-2xl text-[17px] sm:text-lg text-white/90"
            >
              Закупка, контроль, логистика: ЖД, авиа, авто, море. Таможня, документы, шеф-монтаж. Кейсы и реальный опыт.
            </motion.p>
          </div>

          {/* Wordmark — ОДНА строка, меньше, без рам и свечения */}
          <div className="flex lg:justify-end justify-center">
            <span className="brand-wordmark clean whitespace-nowrap">MaxBax-Import</span>
          </div>
        </div>
      </div>
    </section>
  );
}
