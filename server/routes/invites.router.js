const express = require('express');
const pool = require('../modules/pool');
const sendEmail = require('../controllers/email.controller');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * POST route
 * sends data to nodemailer to create a custom url string for the guests to register for the hosts shower
 */
router.post('/email', rejectUnauthenticated, (req, res) => {
  const host = req.user;
  const guests_email = req.body.guestsEmail;
  const showerID = req.body.showerID;
  sendEmail(host, guests_email, showerID);
});

/* TODO ADD UPDATE TO DB OF ANYONE INVITED */

/* TODO ABILITY TO SEND SMS */

module.exports = router;
