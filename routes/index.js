let express = require("express");
let router = express.Router();
let query = require("../config/mysql");
let jwt = require("jsonwebtoken");
let dayjs = require("dayjs");
const { body, validationResult } = require("express-validator");
let createError = require("http-errors");
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
      let res1 = await query("select * from dj_user where user_name=?", [
        user.username,
      ]);
      res1[0].update_time = dayjs(res1[0].update_time).format("YYYY/MM/DD");
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
      res.json({ token: token, data:{...res1[0]} });
    } catch (error) {
      res.send(error);
    }
  }
);

module.exports = router;
