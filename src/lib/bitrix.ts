export type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  source?: string;
};

export async function createLead(payload: LeadPayload) {
  const url = process.env.BITRIX_WEBHOOK_URL;
  if (!url) {
    throw new Error("BITRIX_WEBHOOK_URL is not set");
  }
  const body = {
    fields: {
      TITLE: `Лид с сайта MaxBax Import | ${payload.name || "Без имени"}`,
      NAME: payload.name || "",
      PHONE: payload.phone ? [{ VALUE: payload.phone, VALUE_TYPE: "WORK" }] : [],
      EMAIL: payload.email ? [{ VALUE: payload.email, VALUE_TYPE: "WORK" }] : [],
      COMMENTS: payload.message || "",
      SOURCE_DESCRIPTION: payload.source || "web site form/chat"
    }
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Bitrix error: ${res.status} ${text}`);
  }
  return res.json();
}
