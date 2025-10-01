

'use client';
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      {/* Фон (оставь свои пути при необходимости) */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
  src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero/hero-main-1920.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Левая колонка */}
          <div>
            <motion.h1
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-6xl font-extrabold leading-tight"
            >
              <span className="text-white">
                Импорт из&nbsp;Китая под&nbsp;ключ
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-4 max-w-2xl text-lg text-white/80"
            >
              Закупка, контроль, логистика: ЖД, авиа, авто, море. Таможня, документы, шеф-монтаж. Кейсы и реальный опыт.
            </motion.p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="card px-6 py-3 font-medium border-brand-gold hover:shadow-gold">Оставить заявку</a>
              <a href="#cases" className="px-6 py-3 font-medium border border-brand-line rounded-2xl hover:bg-white/5">Наши кейсы</a>
            </div>
          </div>

          {/* Правая колонка — wordmark */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="flex lg:justify-end justify-center"
            aria-hidden="true"
          >
            <div className="brand-plate">
              <span className="brand-wordmark">MaxBax-Import</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
