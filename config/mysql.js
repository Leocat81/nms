//导入所需模块
var mysql = require("mysql");
//导入配置文件
var cfg = require("./database");
var pool = mysql.createPool({
  host: cfg.HOST,
  user: cfg.USER,
  password: cfg.PASS,
  database: cfg.DATABASE,
  port: cfg.PORT,
});
//导出查询相关
//封装mysql
var query = async (sql, params) => {
  try {
    // await 对于resole方法，必须加return才能被捕获到。
    return await new Promise((resolve, reject) => {
      pool.getConnection((err, conn) => {
        if(err){
          console.log(err);
          return
        }
        conn.query(sql, params, function (qerr, vals, fields) {
          //释放连接
          conn.release();
          //成功事件驱动回调
          resolve(vals);
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = query;
