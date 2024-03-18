// import mysql from "mysql2";

// const connection = mysql.createConnection({
//    host: "127.0.0.1",
//    port: 3306,
//    user: "admin",
//    password: "12345",
//    database: "nodejs" 
// });

import connection from "./db.mjs";

let id = 4;
let data;

connection.execute(
   'SELECT * FROM `sort` WHERE `id` = ?',
   [id],
   (error, results, fields) => {
      if(error){
         console.log(error);
         return false;
      }
      // console.log(results);
      data = results;
      // console.log(fields);
   }
);


// 非同步
// 在index2.mjs中改同步
console.log(data);