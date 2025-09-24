'use client';
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero/hero-main-1920.jpg"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-bold leading-tight"
        >
          Импорт из Китая <span className="gold-gradient">под ключ</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-white/80"
        >
          Закупка, контроль, логистика: ЖД, авиа, авто, море. Таможня, документы, шеф‑монтаж. Кейсы и реальный опыт.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <a href="#contact" className="card px-6 py-3 font-medium border-brand-gold hover:shadow-gold">Оставить заявку</a>
          <a href="#cases" className="px-6 py-3 font-medium border border-brand-line rounded-2xl hover:bg-white/5">Наши кейсы</a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg" />
    </section>
  );
}
