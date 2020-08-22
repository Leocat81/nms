var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
/* GET users listing. */
router.get("/", function (req, res, next) {
  let token = req.body.token
  //解析token
  jwt.verify(token, "hahaha",(err,value)=>{
    res.json(value)
  });
});

module.exports = router;
