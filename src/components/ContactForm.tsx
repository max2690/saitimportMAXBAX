'use client';
import { useState } from "react";

export default function ContactForm(){
  const [state, setState] = useState<'idle'|'ok'|'err'|'loading'>('idle');

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value,
      source: "website form"
    };
    setState('loading');
    try{
      const res = await fetch('/api/lead', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      const j = await res.json();
      setState(j.ok ? 'ok' : 'err');
    }catch{
      setState('err');
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6">
      <h3 className="text-xl font-semibold">Оставить заявку</h3>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <input name="name" required placeholder="Имя" className="rounded-xl bg-transparent border border-brand-line px-3 py-2 outline-none" />
        <input name="phone" required placeholder="Телефон" className="rounded-xl bg-transparent border border-brand-line px-3 py-2 outline-none" />
        <input name="email" placeholder="Email" className="rounded-xl bg-transparent border border-brand-line px-3 py-2 outline-none sm:col-span-2" />
        <textarea name="message" placeholder="Кратко о задаче" className="rounded-xl bg-transparent border border-brand-line px-3 py-2 outline-none sm:col-span-2 min-h-[120px]" />
      </div>
      <button disabled={state==='loading'} className="mt-4 px-6 py-3 border border-brand-gold rounded-2xl">
        {state==='loading' ? 'Отправляем...' : 'Отправить'}
      </button>
      {state==='ok' && <p className="text-brand-gold mt-2">Заявка отправлена. Свяжемся с вами.</p>}
      {state==='err' && <p className="text-red-400 mt-2">Ошибка. Попробуйте ещё раз.</p>}
    </form>
  );
}
