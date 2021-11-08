var express = require("express");
let SQLHelper = require("../helpers/sqlQueryHelper");
var router = express.Router();
router.use(express.json());

router.post("/post", (req, res) => {
  const { data } = req.body;
  console.log("request made to delete", data);
  // validate session
  if (!req.session) {
    console.log("user not logged in");
    res.send({ success: false, message: "user is not logged in" });
  }
  // create query session
  let connection = SQLHelper.createConnection();

  const query = `
  DELETE FROM FORUMS WHERE id = ${connection.escape(
    data.id
  )} HAVING authorID = ${connection.escape(req.session.userID)}
  `;
  // delete forum from table where authorID == req.session.userID
  connection.query(query, (err, rows, field) => {
    if (err) {
      return res.send({ success: true, message: "Successfully removed post" });
    }
    res.send({ success: true, message: "Successfully removed post" });
  });
  // return success message
});

module.exports = router;
