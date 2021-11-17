const jwt = require("jsonwebtoken");
const mailHelper = require("../helpers/sendMail.js");
const jwtValidator = require("../helpers/jwtValidator.js");
var express = require("express");
var router = express.Router();
var path = require("path");
const { body, validationResult } = require("express-validator");
const sessions = require("express-session");
const bcrypt = require("bcryptjs");
let SQLHelper = require("../helpers/sqlQueryHelper");
let mySQL = require("mysql");
// var cors = require("cors");
router.use(express.json());
require("dotenv").config();

router.post(
  "/",
  body("username").isAlphanumeric().isLength({ min: 5, max: 254 }),
  body("email").isLength({ max: 254 }).isEmail().normalizeEmail(),
  body("password").isAscii().isLength({ min: 5, max: 128 }),
  (req, res) => {
    //   get files from signup request
    let newAccount = req.body;
    // Account validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Invalid username or email",
      });
    }
    // Password encryption
    let salt = bcrypt.genSaltSync(10);
    var passHash = bcrypt.hashSync(newAccount.password, salt);
    //   console.log("hash matches?", bcrypt.compareSync(newAccount.password, hash));
    // make sql query to add new user
    let connection = SQLHelper.createConnection();
    let query = `
    INSERT INTO Users (username, email, passwd, registrationDate)
    VALUES ("${newAccount.username}", "${newAccount.email}", "${passHash}", NOW())
    `;
    connection.connect();
    try {
      connection.query(query, function (err, rows, fields) {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            console.log("sending error response");
            res.json({
              success: false,
              message: "Username already exists",
            });
            return;
          } else {
            throw err;
          }
        }
        console.log(rows);
        // create jwt token
        const emailToken = jwtValidator.sign(newAccount.username);
        // send confirmation email
        mailHelper.sendConfirmation(newAccount.email, emailToken);
        //
        res.json({
          success: true,
          message: "Account Successfully created",
        });
      });
      connection.end();
    } catch (err) {}
  }
);

router.post("/validate", (req, res) => {
  const { emailToken } = req.body;
  let decoded = "";
  try {
    decoded = jwtValidator.validate(emailToken);
  } catch (err) {
    return res.status(400).json({ success: false, message: err });
  }

  const connection = SQLHelper.createConnection();
  const query = `
    UPDATE Users
    SET
    verified = 1
    WHERE
    username = ${connection.escape(decoded)}
  `;
  connection.query(query, (err) => {
    if (err) {
      res.status(400).json({ success: false, message: "Database Error" + err });
    } else {
      res
        .status(201)
        .json({ success: true, message: "Account Successfully validated" });
    }
  });
});

module.exports = router;
