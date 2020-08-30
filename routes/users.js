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
router.get("/addUser", async (req, res, next) =>{
      console.log('122')
      let a = await query("select * from users where username=123 ")
      console.log(a)
});

module.exports = router;
