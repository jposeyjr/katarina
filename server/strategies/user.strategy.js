import passport from 'passport';
import mongoose from 'mongoose';
import { comparePassword } from '../modules/encryption.js';
import { Strategy } from 'passport-local';
import { PersonDB } from '../models/person.js';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  PersonDB.findOne({ _id: id })
    .then((result) => {
      const user = result;
      if (user) {
        //removing password from being sent
        delete user.password;
        //saving user info in an object to be used later
        const useInfo = {
          username: user.email,
          _id: user._id,
          role: user.role,
        };
        done(null, useInfo);
      } else {
        done(null, false, { message: 'Incorrect credentials' });
      }
    })
    .catch((error) => {
      console.log(`Error with query during deserializing user ${error}`);
      done(error, null);
    });
});

// Does actual work of logging in
passport.use(
  'local',
  new Strategy((username, password, done) => {
    PersonDB.findOne({ email: username })
      .then((result) => {
        const user = result;
        if (user && comparePassword(password, user.password)) {
          // all good! Passwords match!
          done(null, user);
        } else if (user) {
          // not good! Passwords don't match!
          done(null, false, { message: 'Incorrect credentials.' });
        } else {
          // not good! No user with that name
          done(null, false);
        }
      })
      .catch((error) => {
        console.log(`Error with finding user ${error}`);
        done(null, {});
      });
  })
);

export default passport;
