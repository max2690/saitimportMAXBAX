import { NextResponse } from "next/server";

/**
 * Заглушка чата. Чтобы включить ИИ: задать OPENAI_API_KEY в Vercel и раскомментировать вызов OpenAI ниже.
 */
const USE_STUB = true;

const STUB_RESPONSE =
  "Спасибо за обращение! Пока чат работает в режиме заглушки. Оставьте заявку через форму «Свяжитесь с нами» — мы ответим в рабочее время и поможем с расчётом и сроками.";

export async function POST(req: Request) {
  if (USE_STUB) {
    return NextResponse.json({ ok: true, content: STUB_RESPONSE });
  }

  // Раскомментировать при настройке OpenAI:
  // const { messages } = await req.json();
  // const apiKey = process.env.OPENAI_API_KEY;
  // const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  // if (!apiKey) return NextResponse.json({ ok: false, error: "OPENAI_API_KEY is not set" }, { status: 500 });
  // const client = new OpenAI({ apiKey });
  // const completion = await client.chat.completions.create({ model, messages: [...], temperature: 0.4 });
  // return NextResponse.json({ ok: true, content: completion.choices?.[0]?.message?.content || "Готов помочь!" });

  return NextResponse.json({ ok: true, content: STUB_RESPONSE });
}
