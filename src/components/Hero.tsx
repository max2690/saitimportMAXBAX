'use client';

import { useState } from "react";

const HERO_POSTER = "/hero/hero-main-1920.jpg";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0B1220]" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/20 via-transparent to-[#F7C948]/10 opacity-60" aria-hidden />
      {videoError ? (
        <img
          src={HERO_POSTER}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      ) : (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/video/hero.mp4"
          poster={HERO_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => setVideoError(true)}
        />
      )}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-[#0B1220]/70" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <p className="text-3xl sm:text-4xl font-bold text-[#F7C948] mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Mb-import
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-white">
          Импорт из Китая <span className="gold-gradient">под ключ</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Закупка, контроль, логистика: ЖД, авиа, авто, море. Таможня, документы, шеф‑монтаж. Кейсы и реальный опыт.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#contact" className="card px-6 py-3 font-medium border-brand-gold hover:shadow-gold">Оставить заявку</a>
          <a href="#cases" className="px-6 py-3 font-medium border border-brand-line rounded-2xl hover:bg-white/5">Наши кейсы</a>
        </div>
      </div>
    </section>
  );
}
