var express = require("express");
var router = express.Router();
var query = require("../config/mysql");
var jwt = require('jsonwebtoken');
/* GET home page. */
router.get("/login", function (req, res, next) {
console.log('进入')
  query("select * from users where username='si' ")
    .then((res1) => {
      debugger
   let token=   jwt.sign({
        id:res1[0].id,
        username:res1[0].username
          }, 'hahaha', {
            expiresIn: '1d' 
          })
          res.json({token:token})
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    });
});

module.exports = router;
