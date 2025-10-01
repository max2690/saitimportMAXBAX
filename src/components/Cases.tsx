import Image from "next/image";

type CaseCard = {
  slug: string;
  ruCity: string;
  cnCity: string;
  t: string;
  d: string;
};

export default function Cases(){
  const cases: CaseCard[] = [
    {
      slug: "blocks-plant",
      ruCity: "Москва",
      cnCity: "Чжэнчжоу",
      t: "Завод по производству блоков",
      d: "Оборудование из Китая, монтаж и пуско-наладка. 12 контейнеров, полная документация и выпуск на таможне.",
    },
    {
      slug: "hotel-fitout",
      ruCity: "Сочи",
      cnCity: "Дунгуань",
      t: "Комплектация гостиницы",
      d: "Мебель, сантехника, отделка — под ключ по дизайн-проекту. Контроль качества на фабриках.",
    },
    {
      slug: "municipal-yakutsk",
      ruCity: "Якутск",
      cnCity: "Фошань",
      t: "Муниципальный проект",
      d: "Поставка плитки, брусчатки и фонтанного оборудования. Работа через казначейство и госконтракты.",
    },
    {
      slug: "raw-novosibirsk",
      ruCity: "Новосибирск",
      cnCity: "Иу",
      t: "Экспорт сырья из России в Китай",
      d: "Организовали отгрузку сырья: сертификация, документы, логистика до Иу. Оптимизировали стоимость доставки.",
    },
    {
      slug: "electronics-vladivostok",
      ruCity: "Владивосток",
      cnCity: "Шэньчжэнь",
      t: "Радиоэлектроника из Китая",
      d: "Партийная поставка из Шэньчжэня: проверка поставщика, тесты, таможня за 3 дня, связка авто+авиа.",
    },
    {
      slug: "lighting-spb",
      ruCity: "Санкт-Петербург",
      cnCity: "Нинбо",
      t: "Осветительное оборудование",
      d: "Светильники и комплектующие из Нинбо. Сертификация, ЭДО, монтажные комплекты и инструкции на русском.",
    },
  ];

  return (
    <section id="cases" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl font-bold">Кейсы и опыт</h2>
      <p className="text-white/70 mt-2">
        География проектов по России и Китаю: от промышленного оборудования до электроники и муниципальных заказов.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {cases.map((c) => (
          <article key={c.slug} className="card p-0 overflow-hidden group">
            <Image
              src={
                c.slug === "blocks-plant"
                  ? "/assets/cases/blocks-plant/blocks-plant.jpg"
                  : c.slug === "electronics-vladivostok"
                  ? "/assets/cases/electronics-vladivostok/electronics-vladivostok.jpg"
                  : c.slug === "hotel-fitout"
                  ? "/assets/cases/hotel-fitout/hotel-fitout.png"
                  : c.slug === "lighting-spb"
                  ? "/assets/cases/lighting-spb/lighting-spb.png"
                  : c.slug === "municipal-yakutsk"
                  ? "/assets/cases/municipal/municipal.jpg"
                  : c.slug === "raw-novosibirsk"
                  ? "/assets/cases/raw-novosibirsk/raw-novosibirsk.png"
                  : ""
              }
              alt={`${c.t} — ${c.ruCity} ↔ ${c.cnCity}`}
              width={1200}
              height={800}
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{c.t}</h3>

              {/* Гео-бейджи для SEO */}
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-xs rounded-xl border border-brand-line px-2 py-1 text-white/80">
                  {c.ruCity}
                </span>
                <span className="text-xs rounded-xl border border-brand-line px-2 py-1 text-white/80">
                  {c.cnCity}
                </span>
              </div>

              <p className="text-white/70 mt-3">{c.d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
