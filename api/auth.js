let paidUsers = {};

export default function handler(req, res) {
  const ip = req.query.ip;

  if (paidUsers[ip]) {
    return res.status(200).send("Auth: 1");
  }

  return res.status(200).send("Auth: 0");
}
