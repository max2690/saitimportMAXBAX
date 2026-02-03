import { NextResponse } from "next/server";
import { createLead } from "@/lib/bitrix";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      source: data.source || "website form",
    };

    if (!process.env.BITRIX_WEBHOOK_URL) {
      // Заглушка для Vercel без Bitrix: заявка «принята», никуда не уходит
      console.info("[lead stub]", payload);
      return NextResponse.json({ ok: true, result: { stub: true } });
    }

    const result = await createLead(payload);
    return NextResponse.json({ ok: true, result });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
