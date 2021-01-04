const express = require('express');
const UsersRepository = require('../repositories/users.repository');
const SessionsRepository = require('../repositories/sessions.repository');

const router = express.Router();

router.post('/register', (req, res) => {
  const user = UsersRepository.add(req.body);
  res.json(SessionsRepository.create(user));
});

router.post('/login', (req, res) => {
  const {name, password} = req.body;
  const user = UsersRepository.get(name);
  if (!user) {
    res.status(404);
    res.send('User not found');
    return;
  }

  if (user.password !== password) {
    res.status(401);
    res.send('Password incorrect');
    return;
  }

  res.json(SessionsRepository.create(user));
});

router.get('/:token', (req, res) => {
  const session = SessionsRepository.find(req.params.token);
  if (!session) {
    res.status(404);
    res.send('Session not found');
    return;
  }

  res.json(session);
})

module.exports = router;
