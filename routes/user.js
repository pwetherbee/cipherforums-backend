var express = require("express");
// var keyChainRouter = require("./keyChain");
var followingRouter = require("./following");
const threadRouter = require("./threads");
var router = express.Router();
var path = require("path");
let SQLHelper = require("../helpers/sqlQueryHelper");
const { async } = require("regenerator-runtime");
const sqlQueryHelper = require("../helpers/sqlQueryHelper");
/* GET users listing. */
router.get("/:username", (req, res) => {
  // TODO: Make sure profile is in database
  const username = req.params["username"];
  const connection = SQLHelper.createConnection();
  connection.connect();
  let query = `SELECT userID FROM Users WHERE username = ${connection.escape(
    username
  )}`;
  connection.query(query, (err, rows) => {
    if (err) throw err;
    if (!rows[0]) {
      res.send("404: Account does not exist");
      // res.status(404);
      // console.log("no user found with name ", username);
    } else {
      res.sendFile(path.join(__dirname, "../dist/profile/index.html"));
    }
  });
  connection.end();
});

router.get("/:username/info", (req, res) => {
  const username = req.params["username"];
  let info = {
    exists: false,
    username: username,
    bio: "",
    pic: "",
    createdPosts: [],
    currUser: req.session?.username == username,
    isFollowing: true,
    loggedIn: Boolean(req.session?.userID),
  };
  // Get bio, created posts, and following list from database
  const connection = SQLHelper.createConnection();
  const query = `
  SELECT Forums.url, Forums.subtitle, Forums.creationDate, Forums.image, Users.username, Users.bio, Users.avi FROM Forums
  RIGHT JOIN Users
  ON Forums.authorID = Users.userID
  WHERE Users.username = ${connection.escape(username)}
  ORDER BY Forums.creationDate DESC
  `;
  connection.query(query, (err, rows) => {
    if (err) throw err;
    if (!rows.length) {
      res.send(JSON.stringify(info));
      return;
    }
    console.log(rows[0].bio);
    info.bio = rows[0].bio;
    info.pic = rows[0].avi;
    console.log(rows[0]);
    rows.forEach((row) => row.url && info.createdPosts.push(row));
    if (info.currUser) {
      res.send(JSON.stringify(info));
      return;
    }
    const query2 = `
    SELECT Count(Following.userID) FROM Following
    INNER JOIN Users
    ON Following.followingID = Users.userID
    WHERE Users.username = ${connection.escape(
      username
    )} AND Following.userID = ${req.session?.userID ? req.session.userID : null}
    `;
    connection.query(query2, (err, rows) => {
      if (err) throw err;
      // console.log(rows[0]["Count(Following.userID)"]);
      info.isFollowing = rows[0]["Count(Following.userID)"];
      res.send(JSON.stringify(info));
    });
  });
});

router.post("/settings", (req, res) => {
  if (!req.session?.userID) {
    return res
      .status(403)
      .json({ success: false, message: "User is not logged in" });
  }
  console.log(req.body);
  const { bio, avi } = req.body;
  console.log(bio);
  console.log(avi);
  const connection = sqlQueryHelper.createConnection();
  const query = `
  UPDATE Users
  SET
  ${bio ? `bio = ${connection.escape(bio)},` : ""}
  ${avi ? `avi = ${connection.escape(avi)}` : ""}
  WHERE
  userID = ${req.session.userID}
  `;
  connection.connect();
  connection.query(query, (err, rows) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "An error occured trying to update the database",
      });
    }
    return res.json({
      success: true,
      message: `Successfully updated profile ${req.session.username}`,
    });
  });
});

router.use("/:id/thread", threadRouter);

// router.use("/:id/keychain", keyChainRouter);

router.use("/:id/following", followingRouter);

module.exports = router;
