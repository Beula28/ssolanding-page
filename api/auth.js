export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { mac } = req.body || {};

  if (!mac) {
    return res.status(400).json({ error: "Missing MAC" });
  }

  try {
    const response = await fetch("http://192.168.1.33:8080/cgi-bin/auth.sh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mac }),
    });

    const text = await response.text();

    return res.status(200).json({
      success: true,
      router_response: text,
    });
  } catch (err) {
    return res.status(500).json({ error: "Router unreachable" });
  }
}
