var express = require("express");
var router = express.Router();
var query = require("../config/mysql");
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
var createError = require("http-errors");
/* GET home page. */
router.get(
  "/login",
  [body("username").exists().withMessage("不存在")],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let test = createError(400, errors);
      return res.status(test.status).json({ ...test });
    }
    try {
      const user = req.body;
      let res1 = await query(
        "select * from users where username=? and password=?",
        [user.username, user.password]
      );
      let token = jwt.sign(
        {
          id: res1[0].id,
          username: res1[0].username,
        },
        "hahaha",
        {
          expiresIn: "1d",
        }
      );
      res.json({ token: token, ...res1[0] });
    } catch (error) {
      res.send(error);
    }
  }
);

module.exports = router;
