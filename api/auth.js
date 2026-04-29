export default async function handler(req, res) {
  // openNDS sends GET requests, not POST
  const mac = req.query.mac;

  if (!mac) {
    return res.status(200).send("Auth: 0");
  }

  // TEMP: allow all users (Stripe later)
  return res.status(200).send("Auth: 1");
}
