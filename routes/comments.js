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
  //   console.log(nftID, chainType);
  const connection = SQLHelper.createConnection();
  connection.connect();
  let query = `
  SELECT NFTComments.commentText, NFTComments.postTime, NFTComments.encryptionType, Users.username FROM NFTComments
  INNER JOIN Users
  ON NFTComments.authorID = Users.userID
  WHERE NFTComments.nftID = ${connection.escape(nftID)}
  AND NFTComments.chainType = ${connection.escape(chainType)}
  `;
  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json({
        success: true,
        data: result,
      });
    }
  });
  connection.end();
});
router.post("/", (req, res) => {
  if (!req.session.userID) {
    return res
      .status(403)
      .json({ success: false, message: "You must be logged in" });
  }
  // TODO: Make sure profile is in database
  const { nftID, chainType } = req.query;
  const { text } = req.body;
  console.log(nftID, chainType);
  const connection = SQLHelper.createConnection();
  connection.connect();
  const query = `
   INSERT INTO NFTComments(commentText, postTime, encryptionType, chainType, nftID, authorID)
   VALUES(${connection.escape(text)}, NOW(), "none", ${connection.escape(
    chainType
  )}, ${connection.escape(nftID)}, ${req.session.userID})
    `;
  connection.query(query, (err, rows) => {
    if (err) throw err;
    res
      .status(200)
      .json({ success: true, message: "successfully submitted comment" });
  });
  connection.end();
});

module.exports = router;
