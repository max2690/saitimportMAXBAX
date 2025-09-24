export default function Footer(){
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 text-white/60">
      <div className="border-t border-brand-line pt-6 flex flex-col sm:flex-row gap-4 justify-between">
        <p>© {new Date().getFullYear()} MaxBax Import</p>
        <p>Сделано с умом и уважением к срокам.</p>
      </div>
    </footer>
  );
}
