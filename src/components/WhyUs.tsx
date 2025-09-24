export default function WhyUs(){
  const items = [
    { t: "Опыт на проектах 8–9 фигур", d: "Комплектация заводов, гостиниц, муниципальные проекты." },
    { t: "Честные сроки и сметы", d: "Считаем риски, не рисуем красивые цифры ради контракта." },
    { t: "Контроль качества", d: "Инспекции, видеоотчеты, работа с браком и компенсациями." },
    { t: "Прозрачные коммуникации", d: "CRM, регламенты, фиксируем договорённости." },
  ];
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl font-bold">Почему выбирают нас</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {items.map((i,k)=>(
          <div key={k} className="card p-6">
            <h3 className="text-lg font-semibold">{i.t}</h3>
            <p className="text-white/70 mt-2">{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
