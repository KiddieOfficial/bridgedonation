const store = require("../../lib/donationStore");

export default function handler(req, res) {
  const universeId = req.query.universeId;
  const body = req.body || {};

  store.pushDonation({
    universeId,
    donorName: body.name || "Anon",
    amount: Number(body.amount) || 0,
    message: body.message || "",
    source: "sociabuzz"
  });

  res.json({ ok: true });
}