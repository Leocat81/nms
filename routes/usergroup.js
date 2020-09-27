var express = require("express");
var router = express.Router();
// var jwt = require("jsonwebtoken");
let query = require("../config/mysql");

router.get("/list", async (req, res, next) => {
  let s = await query(
    "SELECT t.name, a.* from test t join action a on t.id=a.uid"
  );
  res.json(s);
});
module.exports = router;
