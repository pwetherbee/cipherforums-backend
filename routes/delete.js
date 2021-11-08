var express = require("express");
let SQLHelper = require("../helpers/sqlQueryHelper");
var router = express.Router();
router.use(express.json());

router.get("/post", (req, res) => {
  const { forumID } = req.body;
  // validate session
  if (!req.session) {
    console.log("user not logged in");
    res.send({ success: false, message: "user is not logged in" });
  }
  // create query session
  // delete forum from table where authorID == req.session.userID

  // return success message
});

module.exports = router;
