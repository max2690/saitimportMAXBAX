'use client';
import { useState } from "react";

export default function ChatWidget(){
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{role:'user'|'assistant', content:string}[]>([
    { role: "assistant", content: "Привет! Я ИИ‑логист MaxBax. О чём ваш запрос по импорту?" }
  ]);

  const send = async () => {
    if(!input.trim()) return;
    const next = [...messages, { role: "user" as const, content: input }];
    setMessages(m => [...m, { role: "user" as const, content: input }]);
    setInput("");
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: next })
    });
    const data = await res.json();
    setMessages(m => [...m, { role: "assistant" as const, content: data?.content || "Готов помочь!" }]);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 w-80 card p-4">
          <div className="text-sm text-white/70 mb-2">Чат с ИИ</div>
          <div className="h-56 overflow-y-auto space-y-2">
            {messages.map((m,i)=>(
              <div key={i} className={m.role==='assistant' ? 'text-white/80' : 'text-white'}>{m.content}</div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              className="flex-1 rounded-xl bg-transparent border border-brand-line px-3 py-2 outline-none"
              placeholder="Ваш вопрос..."
              value={input}
              onChange={e=>setInput(e.target.value)}
              onKeyDown={e=>e.key==='Enter' && send()}
            />
            <button onClick={send} className="px-3 py-2 border border-brand-gold rounded-xl">➤</button>
          </div>
          <p className="mt-2 text-xs text-white/50">Нажимая отправить, вы соглашаетесь с обработкой персональных данных.</p>
        </div>
      )}
      <button
        onClick={()=>setOpen(!open)}
        className="fixed bottom-6 right-6 rounded-full border border-brand-gold px-5 py-3 shadow-gold bg-brand-card"
      >
        {open ? "Закрыть чат" : "Чат с ИИ"}
      </button>
    </>
  );
}
