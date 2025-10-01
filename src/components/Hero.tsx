// удалена дублирующаяся реализация Hero






'use client';
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero(){
  const [fallback, setFallback] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[88vh] lg:min-h-[94vh]">
      {/* Фон (смещён вниз, чтобы была вода/огни) */}
      {!fallback ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/hero/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/hero/poster.jpg"
          onError={() => setFallback(true)}
          style={{ objectPosition: "50% 62%" }}
        />
      ) : (
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/hero/poster.jpg')", backgroundPosition: "50% 62%" }}
        />
      )}

      {/* Мягкие градиенты для читаемости */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/22 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg/55" />
      </div>

      {/* Контент — ровно по центру экрана */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full">
        <div className="grid h-full gap-10 lg:grid-cols-2 place-content-center">
          {/* Левый столбец */}
          <div className="self-center">
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

          {/* Правый столбец — крупный «дорогой» wordmark */}
          <motion.div
            initial={{ x: 16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="flex lg:justify-end justify-center self-center"
            aria-hidden="true"
          >
            <span className="brand-wordmark lux">MaxBax-Import</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
