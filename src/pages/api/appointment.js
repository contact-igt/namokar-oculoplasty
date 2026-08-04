export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const {
    doctor,
    name,
    phone,
    date,
    time,
    ip_address,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
  } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name and Phone number are required fields.",
    });
  }

  const googleSheetUrl =
    "https://script.google.com/macros/s/AKfycbysanD_yhMhnPg_4wbRwroARYWm1ba9opnHTN1iIUmLGK35meTHeThB5spXj7QwmQZi/exec";

  // Fallback to request header IP if client IP string is not provided
  const clientIp =
    ip_address ||
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "";

  const payload = {
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    doctor: doctor || "Not Selected",
    name,
    phone,
    date: date || "Not Specified",
    time: time || "Not Specified",
    ip_address: clientIp,
    utm_source: utm_source || "direct",
    utm_medium: utm_medium || "none",
    utm_campaign: utm_campaign || "none",
    utm_term: utm_term || "none",
    utm_content: utm_content || "none",
  };

  try {
    if (googleSheetUrl) {
      const queryParams = new URLSearchParams(payload).toString();
      const targetUrl = `${googleSheetUrl}?${queryParams}`;

      const response = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      const responseText = await response.text();
      console.log("Google Apps Script Response:", responseText);
    }

    return res.status(200).json({
      success: true,
      message: "Appointment request submitted successfully!",
      data: payload,
    });
  } catch (error) {
    console.error("Form Submission Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit appointment. Please try again later.",
    });
  }
}
