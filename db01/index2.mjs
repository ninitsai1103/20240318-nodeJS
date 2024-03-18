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

(async () => {
   // data = await getData('SELECT * FROM `sort` WHERE `id` = ?', [id]);
   data = await getData(
      'SELECT * FROM `sort` WHERE `id` = ?', 
      [id]).then(results => {
         // console.log(`results`);
         // console.log(results);
         return results[0];
      }).catch(error => {
         console.log("error");
         return undefined;
      });
   console.log(data);
   if(data){
      // 有資料要做的事
   }else {
      // 取不到資料要做的事
   }
})();

function getData(SQL, ary){
   return new Promise((resolve, reject)=>{
      connection.execute(
         SQL,
         ary,
         (error, results, fields) => {
            if(error){
               // console.log(error);
               reject(error);
               return false;
            }
            // console.log(results);
            // data = results;
            // console.log(fields);
            resolve(results);
         }
      );
   })
}