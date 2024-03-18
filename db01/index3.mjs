import connection from "./db2.mjs";

let sql = 'SELECT * FROM `sort` WHERE `id` = ?';
let ary = [2];
let [results, fields] = await connection.execute(sql, ary).then(results => results[0]);
console.log(results);