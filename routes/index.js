var express = require("express");
var router = express.Router();
var query = require("../config/mysql");
var jwt = require('jsonwebtoken');
/* GET home page. */
router.get("/login", function (req, res, next) {
debugger
  query("select * from users where username=?")
    .then((res1) => {
   let token=   jwt.sign({
        id:res1[0].id,
        username:res1[0].username
          }, 'hahaha', {
            expiresIn: '1d' 
          })
          res.json({token:token})
    })
    .catch((err) => {
      debugger;
    });
});

module.exports = router;
