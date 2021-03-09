const nodemailer = require('nodemailer');
const serviceEmail = process.env.GMAIL_USER_NAME;
const servicePassword = process.env.GMAIL_USER_PASSWORD;

//connects us to gmail smtp server
const smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: serviceEmail,
    pass: servicePassword,
  },
  tls: {
    rejectUnauthenticated: false,
  },
});

//checks to see if the info above worked
smtpTransport.verify((error, success) => {
  if (error) console.log(error, 'email');
});

//used to make sure the first char in the name is capitalize encase they didn't do it in registration.
function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

/** Sets options for the email we will send to invite the guest to the course
 * @param {Object} host has hosts name and other info
 * @param {String} guest has the email entered in by the host on the client side
 * @param {Number} showerID id from the course the host was in when sending out the request to the server
 * @event mailOptions uses that information to make an object we will use with the SMTP transport to send an email
 * */

const getOptions = (host, guest, showerID) => {
  let hostName = titleCase(host.first_name);
  const mailOptions = {
    from: host,
    to: guest,
    subject: 'You are invited to join ' + hostName + "'s baby shower!",
    html: `<h1>${hostName} has invited you to join their baby shower!</h1>
        <p>Please follow the link below to register.</p>
        <a href=${url}?host=${host.shower}&shower=${showerID}&email=${guest}>Register here</a>
        `,
  };

  /** Sends the mailOptions object out as an email
   * @param {Object} mailOptions
   * if it doesn't send then we get an error letting us know
   * */

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log('failed to send email @ sendmail step: ', error);
    } else {
      console.log('Sent email to guest successfully!');
    }
    smtpTransport.close();
  });
};

module.exports = getOptions;
