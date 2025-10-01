export default function Footer(){
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 text-white/60">
      <div className="border-t border-brand-line pt-6 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
        <div>
          <p>© {new Date().getFullYear()} MaxBax Import</p>
          <p className="text-sm mt-1">Сделано с умом и уважением к срокам.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#requisites"
            className="px-4 py-2 rounded-2xl border border-brand-line hover:bg-white/5"
          >
            Реквизиты
          </a>
          <a
            href="https://t.me/+7Lv73iQV_lliZGYy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-2xl border border-brand-gold text-white hover:shadow-gold"
            title="Подписаться на центральный канал MaxBax"
          >
            Стать партнёром MaxBax
          </a>
        </div>
      </div>
    </footer>
  );
}
