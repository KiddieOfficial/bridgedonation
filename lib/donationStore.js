const sessions = {};
const donations = [];

function createSession(universeId) {
  const token = Math.random().toString(36).slice(2);
  sessions[token] = { universeId, createdAt: Date.now() };
  return token;
}

function isValidSession(token) { return !!sessions[token]; }
function getSession(token) { return sessions[token]; }

function pushDonation(donation) {
  const id = Date.now();
  const d = { ...donation, id };
  donations.push(d);
  return d;
}

function getAfter(universeId, after) {
  const last = Number(after) || 0;
  return donations.filter(d => d.universeId === universeId && d.id > last);
}

function getTail(universeId) {
  const filtered = donations.filter(d => d.universeId === universeId);
  if (!filtered.length) return "0";
  return String(filtered[filtered.length - 1].id);
}

module.exports = {
  createSession, isValidSession, getSession,
  pushDonation, getAfter, getTail
};