var express = require("express");
var router = express.Router();
// var jwt = require("jsonwebtoken");
let query = require("../config/mysql");

router.get("/list", async (req, res, next) => {
  const sql =
    'SELECT dug.id "key",dug.group_name "groupName",CONCAT("[",GROUP_CONCAT(JSON_OBJECT("key",du.user_name,"name", du.user_name)),"]") children from dj_user_group dug LEFT JOIN dj_user_and_user_group duug on dug.id=duug.group_id LEFT JOIN dj_user du on duug.user_id=du.user_name GROUP BY group_name';
  let s = await query(sql);
  let data = s.map((item, index) => {
    return {
      ...item,
      children: JSON.parse(item.children),
    };
  });
  res.send(data);
});
module.exports = router;
