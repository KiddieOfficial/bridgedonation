export default function handler(req, res) {
  res.json({
    ok: true,
    msg: "Donation bridge running",
    endpoints: {
      test: "POST /api/webhook/test",
      saweria: "POST /api/webhook/saweria/:universeId",
      sociabuzz: "POST /api/webhook/sociabuzz/:universeId",
      tako: "POST /api/webhook/tako/:universeId",
      bagibagi: "POST /api/webhook/bagibagi/:universeId",
      tail: "GET /api/tail",
      donations: "GET /api/donations?after=<id>"
    }
  });
}