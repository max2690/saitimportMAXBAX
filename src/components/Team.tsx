export default function Team(){
  const team = [
    { n: "Макс Швед", r: "Руководитель проектов", b: "15+ лет в международной логистике и комплектации" },
    { n: "Операционный отдел", r: "Логисты, закупка, юристы", b: "Работаем прозрачно, по регламентам" },
  ];
  return (
    <section id="team" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl font-bold">Наша команда</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {team.map((p,k)=>(
          <div key={k} className="card p-6">
            <h3 className="text-xl font-semibold">{p.n}</h3>
            <p className="text-brand-gold">{p.r}</p>
            <p className="text-white/70 mt-2">{p.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
