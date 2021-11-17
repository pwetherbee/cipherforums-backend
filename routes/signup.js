const jwt = require("jsonwebtoken");
const mailHelper = require("../helpers/sendMail.js");
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
  body("email").isEmail().isLength({ max: 254 }),
  body("password").isAscii().isLength({ min: 5, max: 128 }),
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    // Make SQL query to insert new user
    console.log(req.body);
    const { username, email, password } = req.body;
    const query = `
    INSERT INTO Users
    `;

    await client.end();
    res.json({ success: true, message: "Account created successfully" });
  }
);

module.exports = router;
