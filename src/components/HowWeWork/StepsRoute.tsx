"use client";

import * as React from "react";
import CountryShape from "./CountryShape";
import { IconAir, IconShip, IconTruck, IconRail } from "./route-icons";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  iso2: string;
};

type Seg = {
  p1: { x: number; y: number };
  c1: { x: number; y: number };
  c2: { x: number; y: number };
  p2: { x: number; y: number };
};

const transportAt = ["auto", "rail", "air", "sea"] as const;

const steps: Step[] = [
  { id: 1, title: "Запрос",           subtitle: "Понимаем задачу, бюджет и сроки",                 iso2: "RU" },
  { id: 2, title: "Поиск и проверка", subtitle: "Поставщики, инспекции, образцы",                   iso2: "CN" },
  { id: 3, title: "Сделка",           subtitle: "Контракт, оплата, контроль производства",          iso2: "MY" },
  { id: 4, title: "Логистика",        subtitle: "ЖД / Авиа / Авто / Море + таможня",                iso2: "KH" },
  { id: 5, title: "Доставка",         subtitle: "Шеф-монтаж / ввод в эксплуатацию по запросу",      iso2: "RU" },
];

export default function StepsRoute() {

  // вертикальные смещения (md+): волна без налезаний
  const offsets = [
    "md:translate-y-2",   // 1 — почти ровно
    "md:translate-y-16",  // 2 — ниже
    "md:-translate-y-6",  // 3 — чуть выше, перелом волны
    "md:translate-y-28",  // 4 — ниже всех
    "md:translate-y-10",  // 5 — между 3 и 4
  ];

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [route, setRoute] = React.useState<{
    d: string;
    mids: { x: number; y: number }[];
    segs: Seg[];
    segDs: string[];
  } | null>(null);

  React.useEffect(() => {
    const calc = () => {
      const wrap = containerRef.current; if (!wrap) return setRoute(null);
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length < 2) return setRoute(null);

      const r = wrap.getBoundingClientRect();
      const centers = cards.map(el => {
        const b = el.getBoundingClientRect();
        return { x: b.left - r.left + b.width/2, y: b.top - r.top + b.height/2, w:b.width, h:b.height };
      });

  const segs: Seg[] = [];
      const segDs: string[] = [];
      const mids: {x:number;y:number}[] = [];

      for (let i=0;i<centers.length-1;i++){
        const a = centers[i], b = centers[i+1];
        const p1 = { x: a.x + a.w/2 - 28, y: a.y };
        const p2 = { x: b.x - b.w/2 + 28, y: b.y };
        const cx = (p1.x + p2.x)/2;
        const amplitude = 70;
        const c1 = { x: cx, y: p1.y - amplitude * (i%2===0?1:-1) };
        const c2 = { x: cx, y: p2.y + amplitude * (i%2===0?1:-1) };
        segs.push({ p1, c1, c2, p2 });
        segDs.push(`M ${p1.x} ${p1.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p2.x} ${p2.y}`);
        mids.push({ x: cx, y: (p1.y+p2.y)/2 });
      }

      // объединённый путь для фоновой «дорожки» (чтоб пунктир выглядел непрерывным)
      const d = segDs.join(" ");
      setRoute({ d, mids, segs, segDs });
    };

    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(document.documentElement);
    window.addEventListener("resize", calc, { passive:true });
    window.addEventListener("scroll",  calc, { passive:true });
    return () => { ro.disconnect(); window.removeEventListener("resize", calc); window.removeEventListener("scroll", calc); };
  }, []);

  const IconBy = (t: typeof transportAt[number]) =>
    t === "auto" ? IconTruck : t === "rail" ? IconRail : t === "air" ? IconAir : IconShip;

  return (
    <section
      className="relative py-12 md:py-16 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/map.jpg)" }}
    >
      {/* мягкий оверлей для читаемости */}
      <div className="pointer-events-none absolute inset-0 bg-[rgba(11,18,32,0.70)]"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Как мы работаем</h2>

        <div ref={containerRef} className="relative md:pb-64">
          {/* SVG-маршрут на фоне (desktop) */}
          {route && (
            <svg
              className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              {/* Подложка-свечение под линией — делает маршрут объёмнее */}
              <path d={route.d} fill="none"
                    stroke="rgba(247,201,72,.12)" strokeWidth={12} strokeLinecap="round" />

              {/* Сам пунктир */}
              <path className="route-dash" d={route.d} fill="none" />

              {/* Хабы у стыков (выход/вход к каждой карточке) */}
              {route.segs.map((seg, i) => (
                <g key={`hub-${i}`} fill="var(--brand-gold,#F7C948)">
                  <circle cx={seg.p1.x} cy={seg.p1.y} r="4" opacity=".8" />
                  {/* у последнего сегмента отметим p2 как конечную точку */}
                  {i === route.segs.length - 1 && (
                    <circle cx={seg.p2.x} cy={seg.p2.y} r="4" opacity=".8" />
                  )}
                </g>
              ))}

              {/* ===== ЛОКАЛЬНЫЕ ЕЗДОКИ БЕЗ ОСТАНОВКИ (пинг-понг в одной анимации) ===== */}
              {(() => {
                const perSeg = ["auto","rail","air","ship"] as const; // 1→2, 2→3, 3→4, 4→5
                return route.segs.map((seg, i) => {
                  if (i >= perSeg.length) return null;

                  const kind = perSeg[i];
                  const Icon =
                    kind === "auto" ? IconTruck :
                    kind === "rail" ? IconRail  :
                    kind === "air"  ? IconAir   : IconShip;

                  // один путь сегмента (вперёд), а пинг-понг обеспечим keyPoints
                  const dFwd = `M ${seg.p1.x} ${seg.p1.y} C ${seg.c1.x} ${seg.c1.y}, ${seg.c2.x} ${seg.c2.y}, ${seg.p2.x} ${seg.p2.y}`;
                  const pathId = `seg-${i}-path`;
                  const dur = 10 + i; // 10..13 c

                  return (
                    <g key={`runner-${i}`} style={{ color: "var(--brand-gold,#F7C948)" }}>
                      {/* путь для mpath (в defs, чтобы не был виден) */}
                      <defs>
                        <path id={pathId} d={dFwd} />
                      </defs>

                      {/* иконка ездит по сегменту вперёд и назад одной анимацией */}
                      <g className="pointer-events-none" style={{ filter:"drop-shadow(0 0 6px rgba(247,201,72,.55))" }}>
                        <Icon width={20} height={20} />
                        <animateMotion
                          dur={`${dur}s`}
                          begin="0s"
                          repeatCount="indefinite"
                          rotate="auto"
                          calcMode="paced"
                          keyPoints="0;1;0"
                          keyTimes="0;0.5;1"
                        >
                          <mpath xlinkHref={`#${pathId}`} />
                        </animateMotion>
                      </g>
                    </g>
                  );
                });
              })()}
            </svg>
          )}

          {/* Карточки — FLEX (desktop) */}
          <div className="hidden md:flex relative justify-between gap-12 xl:gap-16">
            {steps.map((s, idx) => (
              <div
                key={s.id}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className={`step-card glow-gold relative w-[230px] xl:w-[250px] p-5 ${offsets[idx] ?? ""}`}
              >
                <div className="text-2xl font-bold text-[var(--brand-gold,#F7C948)]">{s.id}</div>
                <h3 className="mt-2 text-base md:text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-[13px] opacity-80 leading-relaxed">{s.subtitle}</p>
                <div className="country-watermark">
                  <CountryShape iso2={s.iso2} className="w-full h-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Мобилка — колонка карточек */}
          <div className="md:hidden grid grid-cols-1 gap-6 relative">
            {steps.map((s) => (
              <div key={s.id} className="step-card glow-gold p-5 relative">
                <div className="text-3xl font-bold text-[var(--brand-gold,#F7C948)]">{s.id}</div>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm opacity-80 leading-relaxed">{s.subtitle}</p>
                <div className="country-watermark">
                  <CountryShape iso2={s.iso2} className="w-14 h-14" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

