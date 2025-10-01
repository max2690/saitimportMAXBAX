'use client';
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [fallback, setFallback] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[90vh]">
      {/* Фон: используем твой файл из /public/video */}
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
          style={{ objectPosition: "50% 62%" }}
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero/hero-main-1920.jpg')",
            backgroundPosition: "50% 62%",
          }}
        />
      )}

      {/* Лёгкие градиенты: читаемо, без «черного экрана» */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg/55" />
      </div>

      {/* Контент — точно по центру */}
      <div className="relative z-10 mx-auto h-full max-w-7xl px-6">
        <div className="h-full grid lg:grid-cols-2 items-center gap-10">
          {/* Лево: заголовок */}
          <div>
            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hero-heading"
            >
              Импорт из Китая<br className="hidden sm:block" />
              под ключ
            </motion.h1>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-4 max-w-2xl text-[17px] sm:text-lg text-white/90"
            >
              Закупка, контроль, логистика: ЖД, авиа, авто, море. Таможня, документы, шеф-монтаж. Кейсы и реальный опыт.
            </motion.p>
          </div>

          {/* Право: крупный «золотой» wordmark — БЕЗ рамки */}
          <motion.div
            initial={{ x: 16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="flex lg:justify-end justify-center"
            aria-hidden="true"
          >
            <span className="brand-wordmark lux">MaxBax-Import</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
