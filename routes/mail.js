var express = require("express");
var router = express.Router();

const nodemailer = require("nodemailer");

var path = require("path");
const { body, validationResult } = require("express-validator");
const sessions = require("express-session");
const bcrypt = require("bcryptjs");
let SQLHelper = require("../helpers/sqlQueryHelper");
let mySQL = require("mysql");
// var cors = require("cors");
router.use(express.json());

router.get("/send", async (req, res) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "hesexok125@idrct.com, baz@example.com", // list of receivers
    subject: "Cipherforums Confirmation Email", // Subject line
    text: "Cipherforums Confirmation Email", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  const previewURL = nodemailer.getTestMessageUrl(info);
  console.log("Preview URL: %s", previewURL);
  res.send(previewURL);
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

module.exports = router;
