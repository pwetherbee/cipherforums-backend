const jwt = require("jsonwebtoken");
require("dotenv").config();
const env = process.env;
const emailSecret = String(env.EMAIL_SECRET);
class JWTValidator {
  sign(obj) {
    return jwt.sign(obj, emailSecret);
  }
  validate(token) {
    return jwt.verify(token, emailSecret);
  }
}

module.exports = new JWTValidator();
