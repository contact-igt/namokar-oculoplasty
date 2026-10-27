const API_URL = process.env.NEXT_PUBLIC_NAMOKAR_LEAD_API_URL || "https://invictusleadbackend-production.up.railway.app/api/v1/namokar-oculoplasty/leads";
const SHEET_URL = "https://script.google.com/macros/s/AKfycbztz8idqpumD5yEdF_9sfGKNfJh-Lr6ex0S82N-JfksEsFJOWwBAQ17OdvMdzpS6-h4_g/exec"

export const buildLeadPayload = ({ name, phone, doctor, utm }) => ({
  submission_id: crypto.randomUUID(), name: name.trim(), phone: phone.trim(), doctor,
  service: "Oculoplasty consultation", form_name: "oculoplasty_appointment",
  page_name: "namokar_oculoplasty_landing", source: "website",
  page_url: window.location.href, referrer: document.referrer || null,
  utm_source: utm.utm_source || null, utm_medium: utm.utm_medium || null,
  utm_campaign: utm.utm_campaign || null, utm_term: utm.utm_term || null,
  utm_content: utm.utm_content || null,
});

export async function submitLead(payload) {
  try {
    const response = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json", "X-Client-Key": "namokar" }, body: JSON.stringify(payload) });
    if (response.ok) return { success: true };
  } catch (_) { /* fall back to the existing Apps Script endpoint */ }
  try {
    const response = await fetch(SHEET_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) });
    return { success: response.ok };
  } catch (_) { return { success: false }; }
}
