export default function Cases(){
  const cases = [
    { t: "Завод по производству блоков", d: "Поставка оборудования, монтаж, пуско‑наладка. 12 контейнеров." },
    { t: "Комплектация гостиницы", d: "Мебель, сантехника, отделка. Под ключ, по дизайн‑проекту." },
    { t: "Муниципальный проект", d: "Поставка плитки, брусчатки, фонтанного оборудования. Через казначейство." },
  ];
  return (
    <section id="cases" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl font-bold">Кейсы и опыт</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {cases.map((c,k)=>(
          <article key={k} className="card p-6">
            <h3 className="text-xl font-semibold">{c.t}</h3>
            <p className="text-white/70 mt-2">{c.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
