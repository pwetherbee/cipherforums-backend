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

  let query = `SELECT userID FROM Users WHERE username = ${connection.escape(
    username
  )}`;
  // connection.connect();
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
    userID: null,
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
  SELECT Forums.id, Forums.url, Forums.subtitle, Forums.creationDate, Forums.image, Users.userID, Users.username, Users.bio, Forums.postType, Forums.publicTopic, Users.avi FROM Forums
  RIGHT JOIN Users
  ON Forums.authorID = Users.userID
  WHERE Users.username = ${connection.escape(username)}
  ORDER BY Forums.creationDate DESC
  `;
  // connection.connect();
  connection.query(query, (err, rows) => {
    if (err) throw err;
    if (!rows.length) {
      res.send(JSON.stringify(info));
      return;
    }
    info.exists = true;

    info.bio = rows[0].bio;
    info.pic = rows[0].avi;
    info.userID = rows[0].userID;

    rows.forEach((row) => row.url && info.createdPosts.push(row));
    if (info.currUser) {
      return res.send(JSON.stringify(info));
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
      connection.end();
    });
  });
});
router.get("/:username/posts", async (req, res) => {
  let { username } = req.params;
  const connection = await SQLHelper.createConnection2();
  const query = `
  SELECT Forums.id, Forums.url, Forums.creationDate, Forums.subtitle, Forums.image, Forums.postType, Forums.publicTopic, Users.username, COUNT(Comments.commentID) as numComments FROM Forums
  LEFT JOIN Comments ON Comments.forumID = Forums.id
  LEFT JOIN Users ON Users.userID = Forums.authorID
  WHERE Users.username = ${connection.escape(username)}
  GROUP BY Forums.id
  ORDER BY Forums.creationDate DESC
  `;
  const rows = await connection.execute(query);
  connection.end();
  res.json({
    success: true,
    data: rows[0],
  });
});

router.get("/:userid/comments", async (req, res) => {
  let { userid } = req.params;
  const connection = await SQLHelper.createConnection2();
  const query = `
  SELECT Comments.commentID, Comments.postTime, Comments.commentText, Comments.forumID, Comments.encryptionType, Users.username FROM Comments
  LEFT JOIN Users
  ON Comments.authorID = Users.userID
  WHERE Comments.authorID = ${connection.escape(userid)}
  ORDER BY Comments.postTime ASC
  `;
  const rows = await connection.execute(query);
  res.json({
    success: true,
    data: rows[0],
  });
});

router.post("/settings", (req, res) => {
  if (!req.session?.userID) {
    return res
      .status(403)
      .json({ success: false, message: "User is not logged in" });
  }
  const { bio, avi } = req.body;
  const connection = sqlQueryHelper.createConnection();
  const query = `
  UPDATE Users
  SET
  ${bio ? `bio = ${connection.escape(bio)}${avi ? "," : ""}` : ""}
  ${avi ? `avi = ${connection.escape(avi)}` : ""}
  WHERE userID = ${req.session.userID}
  `;
  // connection.connect();
  connection.query(query, (err, rows) => {
    if (err) {
      console.log(err);

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
  connection.end();
});

router.use("/:id/thread", threadRouter);

// router.use("/:id/keychain", keyChainRouter);

router.use("/:id/following", followingRouter);

module.exports = router;
