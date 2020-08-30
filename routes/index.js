var express = require("express");
var router = express.Router();
var query = require("../config/mysql");
var jwt = require('jsonwebtoken');
/* GET home page. */
router.get("/login", function (req, res, next) {
debugger
  query("select * from users where username=?",['si'])
    .then((res1) => {
   let token=   jwt.sign({
        id:res1[0].id,
        username:res1[0].username
          }, 'hahaha', {
            expiresIn: '1d' 
          })
          res.json({token:token,...res1[0]})
    })
    .catch((err) => {
      debugger
      res.json(err)
    });
});

module.exports = router;
