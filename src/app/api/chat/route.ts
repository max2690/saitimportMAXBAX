import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "OPENAI_API_KEY is not set" }, { status: 500 });
  }

  try {
    const client = new OpenAI({ apiKey });
    // Simple single-turn reply for MVP
    const completion = await client.chat.completions.create({
      model,
      messages: [
        { role: "system", content: "Ты — вежливый и уверенный ИИ-логист MaxBax. Отвечай кратко, по делу, предлагай оставить заявку, если вопрос про расчёт. Не обещай невозможного. Язык: русский." },
        ...(messages || [])
      ],
      temperature: 0.4,
    });
    const content = completion.choices?.[0]?.message?.content || "Готов помочь с импортом!";
    return NextResponse.json({ ok: true, content });
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e?.message || "OpenAI error" }, { status: 500 });
  }
}
