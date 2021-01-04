const USERS = [];

function add(user) {
  USERS.push(user);
  return user;
}

function get(userName) {
  return USERS.find(user => user.name === userName);
}

module.exports = {
  add,
  get,
}