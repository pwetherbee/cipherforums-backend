var express = require("express");
// var keyChainRouter = require("./keyChain");
var router = express.Router();
var path = require("path");
let SQLHelper = require("../helpers/sqlQueryHelper");
const { async } = require("regenerator-runtime");

router.get("/", (req, res) => {
  const { value } = req.query;

  let connection = SQLHelper.createConnection();
  const query = `
      SELECT username, avi, bio FROM Users
      WHERE username LIKE ${connection.escape(value + "%")}
      ORDER BY username ASC
      LIMIT 10
      `;
  connection.query(query, (err, rows, field) => {
    if (err) {
      return res.send({ success: false, message: "Could not search name" });
    }
    if (rows.length) {
      return res.json({
        success: true,
        results: rows,
      });
    } else {
      return res.json({
        success: true,
        results: [],
      });
    }
  });
  connection.end();
});

module.exports = router;
