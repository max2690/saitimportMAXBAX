
"use client";
import Image from "next/image";

type Member = {
  n: string;
  r: string;
  b: string;
  img: string;
  pos?: string; // object-position, например "50% 30%"
};

export default function Team(){
  const team: Member[] = [
    {
      n: "Макс Швед",
      r: "Генеральный директор ИЦР, создатель цифрового агентства MaxBax",
      b: "Более 10 лет опыта в международном бизнесе и построении цифровых экосистем.",
      img: "maks.jpg",
      pos: "50% 30%",
    },
    {
      n: "Павел Новиков",
      r: "Операционист по импорту, менеджер",
      b: "10+ лет в международном импорте: управление цепочками поставок и документооборотом.",
      img: "pavel.jpg",
      pos: "50% 38%",
    },
    {
      n: "Сергей — Нейропомощник",
      r: "ИИ-менеджер",
      b: "Помогает сократить время и принимает заявки 24/7. Интеллектуальная поддержка на всех этапах.",
      img: "sergey-ai.jpg",
      pos: "50% 42%",
    },
    {
      n: "Светлана Иванова",
      r: "Логист",
      b: "5+ лет опыта. Маршруты, согласования, документы и сопровождение грузов.",
      img: "svetlana.jpg",
      pos: "50% 40%",
    },
  ];

  return (
    <section id="team" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl font-bold">Наша команда</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {team.map((p, k) => (
          <article
            key={k}
            className="card p-6 text-center transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-gold"
          >
            {/* Круглый аватар с золотым кольцом */}
            <div className="mx-auto relative w-40 h-40 rounded-full ring-1 ring-brand-gold/60 shadow-gold overflow-hidden">
              <Image
                src={`/assets/team/${p.img}`}
                alt={p.n}
                fill
                sizes="160px"
                className="object-cover"
                style={{ objectPosition: p.pos || "50% 40%" }}
                priority={k === 0}
              />
            </div>

            <h3 className="text-lg font-semibold mt-4">{p.n}</h3>
            <p className="text-brand-gold text-sm">{p.r}</p>
            <p className="text-white/70 mt-2 text-sm">{p.b}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
