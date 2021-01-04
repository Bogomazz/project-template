const SESSIONS = [];

function generateRandomToken() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function create(user) {
  const session = {
    user, 
    token: generateRandomToken(),
  };
  SESSIONS.push(session);
  return session;
}

function find(token) {
  console.log(SESSIONS.map(s=>s.token).join(', '), token)
  return SESSIONS.find(session => session.token === token);
}

module.exports = {
  create,
  find,
}