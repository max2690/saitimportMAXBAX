export default function Process(){
  const steps = [
    ["Запрос", "Понимаем задачу, бюджет и сроки"],
    ["Поиск и проверка", "Поставщики, инспекции, образцы"],
    ["Сделка", "Контракт, оплата, контроль производства"],
    ["Логистика", "ЖД/авиа/авто/море + таможня"],
    ["Доставка", "Шеф‑монтаж/ввод в эксплуатацию по запросу"]
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl font-bold">Как мы работаем</h2>
      <ol className="grid md:grid-cols-5 gap-6 mt-8">
        {steps.map(([t,d],i)=>(
          <li key={i} className="card p-6">
            <div className="text-brand-gold text-2xl font-bold">{i+1}</div>
            <h3 className="font-semibold mt-2">{t}</h3>
            <p className="text-white/70 mt-2">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
