import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

let paidUsers = {}; // temp store

export default async function handler(req, res) {
  const { session_id } = req.query;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status === "paid") {
      // Store by IP (temporary approach)
      paidUsers[session_id] = true;

      return res.json({ success: true });
    }

    return res.json({ success: false });

  } catch (err) {
    return res.status(500).json({ error: "Stripe error" });
  }
}
