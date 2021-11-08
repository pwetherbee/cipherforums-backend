var express = require("express");
let SQLHelper = require("../helpers/sqlQueryHelper");
var router = express.Router();
router.use(express.json());

router.delete("/post", (req, res) => {
  const data = req.body;
  //   console.log("request made to delete", data);
  // validate session
  if (!req.session.userID) {
    return res.send({ success: false, message: "user is not logged in" });
  }
  // create query session
  let connection = SQLHelper.createConnection();

  const query = `
  DELETE FROM Forums WHERE id = ${connection.escape(
    data.id
  )} AND authorID = ${connection.escape(req.session.userID)}
  `;
  console.log(data.authorID, req.session.userID);
  // delete forum from table where authorID == req.session.userID
  connection.query(query, (err, rows, field) => {
    if (err) {
      return res.send({ success: false, message: "Could not remove post" });
    }
    res.send({ success: true, message: "Successfully removed post" });
  });
  // return success message
});

// router.post();

module.exports = router;
