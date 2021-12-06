var express = require("express");
const idGen = require("../helpers/generateRandomID");
let SQLHelper = require("../helpers/sqlQueryHelper");
var router = express.Router();
var path = require("path");
router.use(express.json());

// Create new forum post using random ID
router.get("/demo", (req, res) => {
  let connection = SQLHelper.createConnection();
  let urlID = idGen.generateID();
  connection.connect();
  let query = `
      INSERT INTO Forums (url, subtitle, creationDate)
    VALUES ("${urlID}", "${urlID}", NOW());
    `;
  connection.query(query, function (err, rows, fields) {
    if (err) throw err;
    // console.log(rows);
    // console.log("success");
  });
  connection.end();
  res.send(res.redirect(`https://cipherforums.com/threads/${urlID}`));
  // if name given, check if name is in data already
  // create template with either anon user or profile name and thread id
});

router.post("/forum", (req, res) => {
  // console.log("logged in as ", req.session.username);
  if (!req.session.username) {
    console.log("no user logged in");
    res.status(403).json({ success: false, message: "User not logged in" });
    return;
  }
  const data = req.body;
  console.log(data);
  // TODO: Replace whitespace
  // TODO: Validate title
  const url = data.title + "!" + idGen.generateHexID();
  let connection = SQLHelper.createConnection();
  connection.connect();
  let query = `
      INSERT INTO Forums (url, subtitle, image, authorID, creationDate, publicTopic, postType)
    VALUES (${connection.escape(url)}, ${connection.escape(
    data.subtitle
  )}, ${connection.escape(data.img)}, ${
    req.session.userID
  }, NOW(), ${connection.escape(req.session.username)}, ${connection.escape(
    data.postType
  )});
    `;
  console.log("making query");
  connection.query(query, function (err, rows, fields) {
    console.log("query made");
    if (err) {
      throw err;
      return res
        .status(400)
        .json({ success: false, message: "error posting forum" });
    }

    res.json({
      success: true,
      message: "success creating forum",
      redirect: `user/${req.session.username}/post/url`,
    });
  });
  connection.end();

  // res.send(JSON.stringify({ redirect: "ok" }));
});

router.post("/public", (req, res) => {});

router.get("/user", (req, res) => {
  if (!req.session.username) {
    // return res.send("user not logged in");
    return res.redirect("../");
  }
  let connection = SQLHelper.createConnection();
  let urlID = idGen.generateID();
  connection.connect();
  let query = `
    INSERT INTO Forums (url, subtitle, authorID, creationDate)
          VALUES ("${urlID}", "${urlID}", "${req.session.userID}", NOW());
    `;
  connection.query(query, function (err, rows, fields) {
    if (err) throw err;
    console.log("success");
  });
  connection.end();
  res.redirect(`https://cipherforums.com/threads/${urlID}`);
});

module.exports = router;
