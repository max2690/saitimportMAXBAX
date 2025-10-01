"use client";

export default function TelegramCTA() {
  return (
    <section className="relative py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(247,201,72,.18)] bg-[rgba(13,19,33,0.85)]">
          {/* мягкое свечение по краям */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_50px_rgba(247,201,72,0.08)_inset]"></div>

          <div className="p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Готовы к реальным кейсам и разбору логистики?</h3>
              <p className="mt-3 text-sm md:text-base opacity-80 max-w-2xl">
                В нашем канале — практические кейсы, схемы поставок (ЖД/авиа/авто/море), лайфхаки по таможне и чек-листы.
                Коротко, по делу и с цифрами.
              </p>
            </div>

            <a
              href="https://t.me/logistueo"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className="
                group relative inline-flex items-center justify-center
                rounded-full px-6 md:px-8 py-3 md:py-4
                font-semibold
                text-[var(--brand-bg,#0B1220)] 
                transition-transform duration-200
              "
              style={{ background: "linear-gradient(90deg,#F7C948,#C6A23A)" }}
            >
              {/* внешнее свечение/аура */}
              <span className="absolute -inset-0.5 rounded-full blur-md opacity-70 group-hover:opacity-90"
                    style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(247,201,72,.55), rgba(247,201,72,0))" }} />
              <span className="relative flex items-center gap-2">
                {/* иконка «телеги» — вектор, чтобы не тянуть ассеты */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  className="opacity-95 group-hover:opacity-100">
                  <path d="M21.5 4.5L2.8 11.8c-.9.35-.88 1.66.03 1.98l4.65 1.68 1.8 4.86c.34.9 1.57.98 1.98.13l2.66-5.5 5.2-8.85c.5-.85-.35-1.86-1.52-1.6Z"
                        fill="#0B1220"/>
                </svg>
                <span>В канал MaxBax-Import</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
