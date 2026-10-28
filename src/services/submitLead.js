const API_URL = process.env.NEXT_PUBLIC_NAMOKAR_LEAD_API_URL || "https://invictusleadbackend-production.up.railway.app/api/v1/namokar-oculoplasty/leads";

export const buildLeadPayload = ({ name, phone, email, doctor, utm }) => ({
  submission_id: crypto.randomUUID(), name: name.trim(), phone: phone.trim(), email: email?.trim() || "", doctor,
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
  } catch (_) { /* fall back to the server-side sheet submission */ }
  try {
    const response = await fetch("/api/appointment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    return { success: response.ok };
  } catch (_) { return { success: false }; }
}
