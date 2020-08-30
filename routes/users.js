var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
let query =require('../config/mysql')
/* GET users listing. */
router.get("/", function (req, res, next) {
  let token = req.body.token
  //解析token
  jwt.verify(token, "hahaha",(err,value)=>{
    res.json(value)
  });
});
router.get("/addUser", async (req, res, next)=> {
  const username ='xiaomi'
  const password ='1234'
  let s=await query("insert into users (username,password) values (?,?)",[username,password])
  debugger
res.json('cheng')
});
module.exports = router;
