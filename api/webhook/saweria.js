const store = require("../../lib/donationStore");

export default function handler(req, res) {
  const universeId = req.query.universeId;
  const body = req.body || {};

  store.pushDonation({
    universeId,
    donorName: body.donator || "Anon",
    amount: body.amount || 0,
    message: body.message || "",
    source: "saweria"
  });

  res.json({ ok: true });
}