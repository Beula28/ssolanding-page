export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { mac, ip, package: pkg } = req.body || {};

  if (!mac || !ip) {
    return res.status(400).json({ error: "Missing params" });
  }

  return res.status(200).json({
    success: true,
    mac,
    ip,
    pkg
  });
}
