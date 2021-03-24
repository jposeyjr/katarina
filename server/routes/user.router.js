import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware.js';
import userStrategy from '../strategies/user.strategy.js';
import { encryptPassword } from '../modules/encryption.js';
import { PersonDB } from '../models/person.js';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    console.log(err.message);
  }
});

router.post('/register', (req, res, next) => {
  const email = req.body.username;
  const password = encryptPassword(req.body.password);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const name = firstName.toUpperCase() + ' ' + lastName.toUpperCase();
  const newUser = new PersonDB({
    email,
    password,
    name,
  });
  newUser
    .save()
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log(err.message);
  }
});

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

export default router;
