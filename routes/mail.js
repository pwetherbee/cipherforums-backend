var express = require("express");
var router = express.Router();

const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
var path = require("path");
const { body, validationResult } = require("express-validator");
const sessions = require("express-session");
const bcrypt = require("bcryptjs");
let SQLHelper = require("../helpers/sqlQueryHelper");
let mySQL = require("mysql");

const EMAILSECRET = "shhhhh";
// var cors = require("cors");
router.use(express.json());

router.get("/send", async (req, res) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  console.log("token and decoded", token);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "support@cipherforums.com", // generated ethereal user
      pass: "theCreekRopeSwing$1", // generated ethereal password
    },
  });
  var token = jwt.sign({ test: "helloworld" }, EMAILSECRET);

  const emailMessage = `Confirm you email at: http://localhost:4001/api/mail/validate/${token}`;
  const emailMarkup = `
  <body>
  <h1>Welcome to Cipherforums</h1>
  <h5>Confirm your email here:  </h5>
  <a href = "http://localhost:4001/api/mail/validate/${token}">Confirm Email</a>
  </body>
  
  `;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"CipherForums" <support@cipherforums.com>', // sender address
    to: "hesexok125@idrct.com, baz@example.com", // list of receivers
    subject: "Cipherforums Confirmation Email", // Subject line
    text: emailMessage, // plain text body
    html: emailMarkup, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  const previewURL = nodemailer.getTestMessageUrl(info);
  console.log("Preview URL: %s", previewURL);
  res.send(previewURL);
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

router.get("/validate/:emailtoken", (req, res) => {
  const { emailtoken } = req.params;
  var decoded = jwt.verify(emailtoken, EMAILSECRET);
  res.send(decoded);
});

module.exports = router;
