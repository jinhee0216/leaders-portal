// netlify/functions/gas.js
export async function handler(event) {
  const GAS_URL = "https://script.google.com/macros/s/AKfycbwpST-hCoXWY9zls2dMxshASU575HgK2kLS09uEgtfLjY7kxAwqh3mlaGBCQSEEG3zA/exec";

  try {
    const qs = event.queryStringParameters || {};
    const url = new URL(GAS_URL);

    Object.entries(qs).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });

    const res = await fetch(url.toString(), { method: "GET" });
    const text = await res.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
      body: text,
    };
  } catch (e) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ ok: false, error: String(e && e.message ? e.message : e) }),
    };
  }
}
