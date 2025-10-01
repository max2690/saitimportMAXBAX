export default function Requisites() {
  return (
    <section id="requisites" className="mx-auto max-w-7xl px-6 py-12">
      <div className="card p-6">
        <h2 className="text-2xl font-bold">Реквизиты компании</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-6 text-white/80">
          <div>
            <p><span className="text-white font-semibold">ООО «ИЦР «НАХОДКА»</span></p>
            <p className="mt-1">Общество с ограниченной ответственностью «Инновационный Центр Разработок «Находка»</p>
            <p className="mt-1 italic">Limited Liability Company “Innovation Development Center ‘Nakhodka’”</p>
            <div className="mt-3 text-white/70 text-sm space-y-1">
              <p>Статус: действующее предприятие, микропредприятие</p>
              <p>Дата образования: 27 апреля 2022</p>
            </div>
          </div>

          <div className="space-y-1">
            <p><span className="text-white font-semibold">ИНН:</span> 2508142898</p>
            <p><span className="text-white font-semibold">КПП:</span> 250801001</p>
            <p><span className="text-white font-semibold">ОГРН:</span> 1222500009676</p>
            <p className="mt-2"><span className="text-white font-semibold">Адрес:</span> 692919, Приморский край, г.о. Находкинский, г. Находка, ул. Перевальная, 62А, этаж 2</p>
          </div>
        </div>
      </div>
    </section>
  );
}
