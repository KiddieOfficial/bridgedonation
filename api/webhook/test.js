const store = require("../../lib/donationStore");

export default function handler(req, res) {
  const data = {
    universeId: "test",
    donorName: "Tester",
    amount: 123,
    message: "Hello world",
    source: "test"
  };
  store.pushDonation(data);
  res.json({ ok: true, pushed: data });
}