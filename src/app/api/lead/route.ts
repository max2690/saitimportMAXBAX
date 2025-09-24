import { NextResponse } from "next/server";
import { createLead } from "@/lib/bitrix";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const result = await createLead({
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      source: data.source,
    });
    return NextResponse.json({ ok: true, result });
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
