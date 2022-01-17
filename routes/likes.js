var express = require("express");
// var keyChainRouter = require("./keyChain");
var router = express.Router();
var path = require("path");
let SQLHelper = require("../helpers/sqlQueryHelper");
const { async } = require("regenerator-runtime");

/* GET users listing. */
router.get("/check", (req, res) => {
  const { nftID, chainType } = req.query;
  if (!req.session.userID) {
    return res.json({ success: true, isLiked: false });
  }
  let connection = SQLHelper.createConnection();
  const query = `
    SELECT * FROM Likes
    WHERE userID = ${req.session.userID}
    AND nftID = ${connection.escape(nftID)}
    AND chainType = ${connection.escape(chainType)}
    `;
  connection.query(query, (err, rows, field) => {
    if (err) {
      connection.end();
      return res.send({ success: false, message: "Could not check likes" });
    }
    if (rows.length) {
      return res.json({
        success: true,
        isLiked: true,
      });
    } else {
      return res.json({
        success: true,
        isLiked: false,
      });
    }
  });
  connection.end();
});

router.get("/count", (req, res) => {
  const { nftID, chainType } = req.query;
  if (!nftID || !chainType)
    return res.status(401).json({
      success: false,
      message: "nftID and chainType required",
    });

  const connection = SQLHelper.createConnection();
  const query = `
  SELECT COUNT(*) AS numLikes FROM Likes
  WHERE nftID = ${connection.escape(nftID)}
  AND chainType = ${connection.escape(chainType)}
  `;
  connection.connect();
  connection.query(query, (err, result) => {
    if (err) {
      connection.end();
      throw err;
    } else {
      return res.json({
        success: true,
        count: result[0].numLikes,
      });
    }
  });
  connection.end();
});

router.get("/", (req, res) => {
  // TODO: Make sure profile is in database
  const { nftID, chainType, username } = req.query;
  //   console.log(nftID, chainType);
  const connection = SQLHelper.createConnection();
  //NFTComments.commentText, NFTComments.postTime, NFTComments.encryptionType,
  connection.connect();
  let query = `
  SELECT Likes.* FROM Likes
  INNER JOIN Users
  ON Likes.userID = Users.userID
  WHERE Likes.nftID = ${nftID ? connection.escape(nftID) : "Likes.nftID"}
  AND Likes.chainType = ${
    chainType ? connection.escape(chainType) : "Likes.chainType"
  }
  AND Users.username = ${
    username ? connection.escape(username) : "Users.username"
  }
  `;
  connection.query(query, (err, result) => {
    if (err) {
      connection.end();
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
  const { nftID, chainType } = req.query;
  const { displayURI } = req.body;
  const connection = SQLHelper.createConnection();
  connection.connect();
  const query = `
  INSERT INTO Likes(userID, nftID, chainType, displayURI)
  VALUES(${connection.escape(req.session.userID)}, ${connection.escape(
    nftID
  )}, ${connection.escape(chainType)}, ${connection.escape(displayURI)})
   `;

  connection.query(query, (err, rows) => {
    if (err) throw err;
    res.status(200).json({ success: true, message: "successfully liked nft" });
  });
  connection.end();
});

router.delete("/", (req, res) => {
  const { nftID, chainType } = req.query;
  if (!req.session.userID) {
    return res.send({ success: false, message: "user is not logged in" });
  }
  let connection = SQLHelper.createConnection();
  const query = `
  DELETE FROM Likes WHERE userID = ${connection.escape(req.session.userID)}
  AND nftID = ${connection.escape(nftID)}
  AND chainType = ${connection.escape(chainType)}
  `;
  //   console.log(data.authorID, req.session.userID);
  // delete forum from table where authorID == req.session.userID
  connection.query(query, (err, rows, field) => {
    if (err) {
      return res.send({ success: false, message: "Could not remove comment" });
    }
    res.send({ success: true, message: "Successfully removed comment" });
  });
  connection.end();
});

module.exports = router;
