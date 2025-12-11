const store = require("../lib/donationStore");

export default function handler(req, res) {
  const token = req.headers["x-session"];
  if (!store.isValidSession(token)) return res.status(403).json({ ok: false });

  const universeId = store.getSession(token).universeId;
  const after = req.query.after || 0;
  res.json({ items: store.getAfter(universeId, after) });
}