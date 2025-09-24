import { Ship, Plane, Truck, Train } from "lucide-react";

const Item = ({icon:Icon, title, desc, video}:{icon:any,title:string,desc:string,video:string}) => (
  <div className="card p-6">
    <div className="flex items-center gap-3">
      <Icon className="w-6 h-6 text-brand-gold" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-white/70">{desc}</p>
    <video className="mt-4 rounded-xl border border-brand-line w-full" src={video} autoPlay loop muted playsInline />
  </div>
);

export default function TransportModes(){
  return (
    <section id="modes" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl font-bold">Виды доставки</h2>
      <p className="text-white/70 mt-2">Под задачи подбираем оптимальную схему: цена/срок/риски.</p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Item icon={Train} title="ЖД" desc="Контейнерные и сборные грузы, оптимально по цене/сроку." video="/video/rail.mp4" />
        <Item icon={Plane} title="Авиа" desc="Срочные поставки и критичные сроки." video="/video/air.mp4" />
        <Item icon={Truck} title="Авто" desc="Дверь‑в‑дверь, гибкая маршрутизация." video="/video/road.mp4" />
        <Item icon={Ship} title="Море" desc="Низкая стоимость для крупных партий." video="/video/sea.mp4" />
      </div>
    </section>
  );
}
