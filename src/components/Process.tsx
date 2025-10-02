"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Step = {
  n: number;
  t: string;
  d: string;
  icon: string;
};

const steps: Step[] = [
  { n: 1, t: "Запрос",            d: "Понимаем задачу, бюджет и сроки.",                       icon: "/assets/process/1-request.svg" },
  { n: 2, t: "Поиск и проверка",  d: "Поставщики, инспекции, образцы.",                        icon: "/assets/process/2-search.svg" },
  { n: 3, t: "Сделка",            d: "Контракт, оплата, контроль производства.",              icon: "/assets/process/3-deal.svg" },
  { n: 4, t: "Логистика",         d: "ЖД/авиа/авто/море + таможня.",                          icon: "/assets/process/4-logistics.svg" },
  { n: 5, t: "Доставка",          d: "Шеф-монтаж/ввод в эксплуатацию по запросу.",            icon: "/assets/process/5-delivery.svg" },
];

export default function Process(){
  const wrap = {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
  };
  const card = {
    hidden: { y: 18, opacity: 0 },
    show:   { y: 0,  opacity: 1, transition: { duration: .45, ease: "easeOut" } }
  };

  return (
    <section id="process" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      {/* фон-сетка */}
      <div className="absolute inset-0 -z-10 bg-grid pointer-events-none opacity-[.18]" />

      <h2 className="text-3xl font-bold mt-16">Как мы работаем</h2>

      {/* SVG-коннекторы (только >= lg) */}
      <svg
        className="absolute left-6 right-6 top-[140px] hidden lg:block -z-0"
        height="140"
        viewBox="0 0 1200 140"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldStroke" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7C948" />
            <stop offset="0.4" stopColor="#FFE7A3" />
            <stop offset="1" stopColor="#EFB532" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-200%" width="140%" height="500%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(247,201,72,.35)"/>
          </filter>
        </defs>

        {/* точки ~ по центрам пяти колонок */}
        <path
          d="M 60 70 C 160 70 160 70 260 70 S 460 70 560 70  760 70 860 70  1060 70 1140 70"
          stroke="url(#goldStroke)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#softGlow)"
        />
      </svg>

      <motion.div
        variants={wrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }}
        className="relative mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5"
      >
        {steps.map((s) => (
          <motion.article key={s.n} variants={card} className="card relative overflow-hidden p-6">
            {/* иконка шага */}
            <div className="absolute -top-5 left-5 h-10 w-10 rounded-2xl bg-brand-bg/80 ring-1 ring-brand-gold/60 grid place-items-center shadow-gold">
              <Image src={s.icon} alt="" width={22} height={22} className="opacity-90" />
            </div>

            {/* номер шага */}
            <div className="step-badge">{s.n}</div>

            <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
            <p className="mt-3 text-white/70">{s.d}</p>

            {/* контур-подсветка при ховере */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent hover:ring-brand-line/70 transition" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
