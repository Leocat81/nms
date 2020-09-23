var express = require("express");
var router = express.Router();
// var jwt = require("jsonwebtoken");
let query = require("../config/mysql");

router.get("/list", async (req, res, next) => {
  let s = await query("select * from dj_user_group");
  res.json(s);
});
module.exports = router;
