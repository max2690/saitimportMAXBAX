export default function Footer() {
	return (
		<footer className="mx-auto max-w-7xl px-6 pt-12 pb-32 text-white/60">
			<div className="border-t border-brand-line pt-6">

				{/* Центр: партнёрская кнопка */}
				<div className="w-full flex justify-center">
					<a
						href="https://t.me/+7Lv73iQV_lliZGYy"
						target="_blank"
						rel="noopener noreferrer"
						className="px-5 py-2.5 rounded-2xl border border-brand-gold text-white hover:shadow-gold"
						title="Подписаться на центральный канал MaxBax"
					>
						Стать партнёром MaxBax
					</a>
				</div>

				{/* Копирайт */}
				<div className="mt-6 flex flex-col items-center gap-1">
					<p>© {new Date().getFullYear()} MaxBax Import</p>
					<p className="text-sm">Сделано с умом и уважением к срокам.</p>
				</div>

				{/* Реквизиты прямо в подвале */}
				<div className="mt-8 rounded-2xl border border-brand-line bg-brand-card/40 p-5 text-sm">
					<h3 className="text-white font-semibold text-base">Реквизиты компании</h3>
					<div className="mt-3 grid gap-6 md:grid-cols-2">
						<div className="space-y-1">
							<p><span className="text-white font-semibold">ООО «ИЦР «НАХОДКА»</span></p>
							<p>Общество с ограниченной ответственностью «Инновационный Центр Разработок «Находка»</p>
							<p className="italic">Limited Liability Company “Innovation Development Center ‘Nakhodka’”</p>
							<p className="mt-2">Статус: действующее предприятие, микропредприятие</p>
							<p>Дата образования: 27 апреля 2022</p>
						</div>
						<div className="space-y-1">
							<p><span className="text-white font-semibold">ИНН:</span> 2508142898</p>
							<p><span className="text-white font-semibold">КПП:</span> 250801001</p>
							<p><span className="text-white font-semibold">ОГРН:</span> 1222500009676</p>
							<p className="mt-2">
								<span className="text-white font-semibold">Адрес:</span> 692919, Приморский край, г.о. Находкинский, г. Находка,
								ул. Перевальная, 62А, этаж 2
							</p>
						</div>
					</div>
				</div>

			</div>
		</footer>
	);
}
// оставляю только одну реализацию Footer (с реквизитами и центральной кнопкой)
// удалена дублирующаяся реализация Footer
