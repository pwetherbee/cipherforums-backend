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
  //NFTComments.commentText, NFTComments.postTime, NFTComments.encryptionType,
  connection.connect();
  let query = `
  SELECT NFTComments.*,  Users.username FROM NFTComments
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

router.delete("/", (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  if (!req.session.userID) {
    return res.send({ success: false, message: "user is not logged in" });
  }
  console.log(id);
  let connection = SQLHelper.createConnection();

  const query = `
  DELETE FROM NFTComments WHERE commentID = ${connection.escape(
    id
  )} AND authorID = ${connection.escape(req.session.userID)}
  `;
  //   console.log(data.authorID, req.session.userID);
  // delete forum from table where authorID == req.session.userID
  connection.query(query, (err, rows, field) => {
    if (err) {
      return res.send({ success: false, message: "Could not remove comment" });
    }
    res.send({ success: true, message: "Successfully removed comment" });
  });
});

module.exports = router;
