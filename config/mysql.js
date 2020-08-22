//导入所需模块  
var mysql=require("mysql");    
//导入配置文件  
var cfg  =require("./database");  
var pool = mysql.createPool({    
    host:      cfg.HOST,  
    user:      cfg.USER,   
    password:  cfg.PASS,    
    database:  cfg.DATABASE,    
    port:      cfg.PORT  
});    
//导出查询相关  
//封装mysql
var query=function(sql){    
  return new Promise((resolve,reject)=>{
    pool.getConnection(function(err,conn){    
       if(err){    
           //失败事件驱动回调 
            reject(err,null,null);    
        }else{    
            conn.query(sql,function(qerr,vals,fields){    
                //释放连接   
                conn.release();    
                console.log()
                //成功事件驱动回调    
                if(!qerr){
                resolve(vals);  
                }else{
                     reject(qerr);   
                }
            });    
        }  
        }) 
    });    
};    
module.exports=query;    