var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var query = require("../config/mysql");
/* GET users listing. */
router.get("/", function (req, res, next) {
  let token = req.body.token
  //解析token
  jwt.verify(token, "hahaha",(err,value)=>{
    res.json(value)
  });
});
router.get("/insertUser", async (req, res, next)=> {
  let s=await query("select * from users where username=?")
debugger
});
module.exports = router;
