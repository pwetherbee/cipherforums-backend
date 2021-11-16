var express = require("express");
const idGen = require("../helpers/generateRandomID");
var router = express.Router();
let SQLHelper = require("../helpers/sqlQueryHelper");
const userRouter = require("./user");
const loginRouter = require("./login");
const createRouter = require("./create");
const deleteRouter = require("./delete");
const { body, validationResult } = require("express-validator");
router.use(express.json());

// First forum created: StableBest-sellingNewt

// Get forum from url tag
router.get("/threads/:tag", (req, res) => {
  let urlTag = req.params["tag"];
  // Make sql query
  let connection = SQLHelper.createConnection();
  let query = `
  SELECT Forums.id, Forums.url, Forums.creationDate, Forums.subtitle, Forums.image, Forums.publicTopic, Users.username FROM Forums
  LEFT JOIN Users
  ON Forums.authorID = Users.userID
  WHERE Forums.url = ${connection.escape(urlTag)}
  `;
  // Connect to database
  connection.connect();
  // Send Query and read result
  connection.query(query, function (err, rows, fields) {
    if (err) throw err;
    const id = rows[0]?.id;
    if (!id) {
      res.sendStatus(404);
      return;
    }

    const forum = {
      author: rows[0].username || "Anon",
      id: id,
      title: rows[0].url,
      date: rows[0].creationDate,
      subtitle: rows[0].subtitle,
      publicTopic: rows[0].publicTopic,
      image: rows[0].image,
      comments: [],
    };
    query = `
    SELECT Comments.commentID, Comments.postTime, Comments.commentText, Comments.forumID, Comments.encryptionType, Users.username FROM Comments
    LEFT JOIN Users
    ON Comments.authorID = Users.userID
    WHERE forumID = ${id}
    ORDER BY Comments.postTime ASC
    `; //(SELECT id FROM Forums WHERE url = "${urlTag}"

    //TODO: Escape callback hell here

    connection.query(query, function (err, rows, fields) {
      if (err) throw err;

      // const authorIDs = rows.map((row) => row.authorID);

      rows.forEach((row, i) => {
        if (!row) {
          res.send(forum);
          return;
        }
        // Generate comment for every row returned in SQL

        let comment = {
          id: row.commentID,
          author: row.username || "Anonymous",
          time: row.postTime,
          text: row.commentText,
          forumID: row.forumID,
          encryptionType: row.encryptionType,
        };
        forum.comments.push(comment);
      });
      res.send(forum);
    });
    connection.end();
  });
});

router.get("/:username/created", (req, res) => {
  const username = req.params["username"];
  // console.log(username);
  const connection = SQLHelper.createConnection();
  const query = `
  SELECT Forums.url, Forums.subtitle, Forums.creationDate, Users.username FROM Forums
  INNER JOIN Users
  ON Forums.authorID = Users.userID
  WHERE Users.username = ${connection.escape(username)}
  ORDER BY Forums.creationDate DESC
  `;
  connection.query(query, (err, rows) => {
    if (err) throw err;
    const createdForums = [];
    rows.forEach((row) => createdForums.push(row));
    // console.log(createdForums);
    res.send(JSON.stringify(createdForums));
  });
});

// Post comment on thread from url

router.post("/threads/:tag", (req, res) => {
  let urlID = req.params["tag"];
  let connection = SQLHelper.createConnection();
  let commentData = req.body;
  if (!commentData) {
    return;
  }
  // if (req.session.userID) {
  //   // get user id
  //   let id = req.session.userID
  // }
  // Make SQL query to post new thread
  // console.log(req.session.userID);
  let query = `
  INSERT INTO Comments (forumID, authorID, commentText, encryptionType, postTime)
  VALUES (${connection.escape(commentData.forumID)}, ${
    connection.escape(req.session.userID) || "NULL"
  }, ${connection.escape(commentData.text)}, ${connection.escape(
    commentData.encType
  )}, NOW())
  `;
  connection.connect();
  connection.query(query, function (err, rows, fields) {
    if (err) throw err;
  });
  connection.end();
  res.json({
    author: req.session.username || "Anonymous",
    forumID: commentData.forumID,
    time: "just now",
    text: commentData.text,
    encryptionType: commentData.encType,
  });
});

// SQl query to generate and return a new random thread
router.put("/threads", (req, res) => {
  // Generate random thread ID
  let urlID = idGen.generateID();
  // Connect to database
  let connection = SQLHelper.createConnection();
  connection.connect();
  let query = `
  INSERT INTO Forums (url,  title, creationDate)
  VALUES ("${urlID}", "${urlID}", NOW());
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) throw err;
  });
  connection.end();
  res.send(
    JSON.stringify({
      newID: urlID,
    })
  );
});

router.get("/public/:topic", async (req, res) => {
  let topic = req.params["topic"];
  const connection = await SQLHelper.createConnection2();
  const query = `
  SELECT Forums.id, Forums.url, Forums.creationDate, Forums.subtitle, Forums.image, Users.username, COUNT(Comments.commentID) as numComments FROM Forums
  LEFT JOIN Comments ON Comments.forumID = Forums.id
  LEFT JOIN Users ON Users.userID = Forums.authorID
  WHERE Forums.publicTopic = ${connection.escape(topic)}
  GROUP BY Forums.id
  `;
  connection.connect();
  const rows = await connection.execute(query);
  connection.end();
  res.json(rows[0]);
});

router.post(
  "/public/:topic",
  body("title").isAscii().isLength({ min: 1, max: 250 }),
  body("subtitle").isAscii().isLength({ min: 1, max: 250 }),
  body("image").isLength({ max: 250 }),
  async (req, res) => {
    if (!req.session.userID) {
      return res.status(403).json({
        success: false,
        message: "You must be logged in to post to a public forum",
      });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({
        success: false,
        message: `invalid title, subtile, or image: ${errors.ErrorMessage}`,
      });
    }
    let topic = req.params["topic"];
    let data = req.body;
    console.log(req.body, topic);
    const url = data.title + "!" + idGen.generateHexID();
    const connection = await SQLHelper.createConnection2();
    const query = `
  INSERT INTO Forums (url, authorID, subtitle, CreationDate, publicTopic, image)
  VALUES (${connection.escape(url)},${
      req.session.userID || 0
    }, ${connection.escape(data.subtitle)}, NOW(), ${connection.escape(
      topic
    )}, ${connection.escape(data.image)})
  `;
    connection.connect();
    const rows = await connection.execute(query);
    connection.end();
    return res.json({ success: true, message: "post successful", url: url });
  }
);

router.use("/delete", deleteRouter);

router.use("/user", userRouter);
router.use("/login", loginRouter);
router.use("/create", createRouter);

module.exports = router;
