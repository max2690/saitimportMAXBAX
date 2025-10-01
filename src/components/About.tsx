import Image from "next/image";

export default function About(){
  const stats = [
    { k: "10+ лет", v: "опыта в импорте", d: "Комплектация заводов, гостиниц, муниципальных объектов." },
    { k: "2–5 дней", v: "выпуск на таможне", d: "Типовые кейсы при корректной документации." },
    { k: "ЖД/Авиа/Авто/Море", v: "глобальная логистика", d: "Выбираем оптимум по срокам/цене/рискам." },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        {/* Лево: текст */}
        <div>
          <h2 className="text-3xl font-bold">О нас — MaxBax&nbsp;Import</h2>
          <p className="mt-4 text-white/80">
            Мы — операционная команда, которая закрывает полный цикл
            поставок из Китая: поиск и проверка поставщиков, договоры и
            оплата, производство и инспекции, логистика (ЖД/авиа/авто/море),
            таможня и доставка на объект. По запросу делаем шеф-монтаж и
            ввод в эксплуатацию с привлечением специалистов из Китая.
          </p>
          <p className="mt-3 text-white/75">
            Работаем прозрачно: CRM, регламенты, отчётность, фиксируем
            договорённости и сроки. Используем ИИ и нейросети для расчётов,
            проверки контрагентов, планирования маршрутов и контроля статусов — это
            экономит время и снижает риски.
          </p>

          {/* бейджи доверия */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-brand-line px-3 py-1.5 text-sm text-white/80">
              ✅ Договор, закрывающие, ЭДО
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-brand-line px-3 py-1.5 text-sm text-white/80">
              🛂 Параллельный импорт легально
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-brand-line px-3 py-1.5 text-sm text-white/80">
              🤖 ИИ-ассистенты и автоматизация
            </span>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="card px-6 py-3 font-medium border-brand-gold hover:shadow-gold">Связаться с нами</a>
            <a href="#cases" className="px-6 py-3 font-medium border border-brand-line rounded-2xl hover:bg-white/5">
              Посмотреть кейсы
            </a>
          </div>
        </div>

        {/* Право: цифры/факты и (опц.) фото */}
        <div className="card p-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="rounded-xl border border-brand-line p-4 text-center">
                <div className="text-brand-gold text-xl font-extrabold">{s.k}</div>
                <div className="font-semibold mt-1">{s.v}</div>
                <div className="text-white/60 text-sm mt-1">{s.d}</div>
              </div>
            ))}
          </div>

          {/* Если будет фото команды — раскомментируй и положи /assets/about/team.jpg */}
          {/* 
          <div className="mt-6 overflow-hidden rounded-xl border border-brand-line">
            <Image
              src="/assets/about/team.jpg"
              alt="Команда MaxBax Import"
              width={1200}
              height={800}
              className="w-full h-56 object-cover"
            />
          </div> 
          */}
        </div>
      </div>
    </section>
  );
}
