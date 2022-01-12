var express = require("express");
// var keyChainRouter = require("./keyChain");
var router = express.Router();
var path = require("path");
let SQLHelper = require("../helpers/sqlQueryHelper");
const { async } = require("regenerator-runtime");
const sqlQueryHelper = require("../helpers/sqlQueryHelper");
/* GET users listing. */

router.get("/", (req, res) => {
  // TODO: Make sure profile is in database
  const { nftID, chainType } = req.query;
  console.log(nftID, chainType);
  const connection = SQLHelper.createConnection();
  connection.connect();
  const query = `
  DELETE FROM Comments WHERE commentID = ${connection.escape(
    data.id
  )} AND authorID = ${connection.escape(req.session.userID)}
  `;
  connection.end();
});

module.exports = router;
