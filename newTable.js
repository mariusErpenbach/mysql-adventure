var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
    password: "headstrong312",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql_createTable = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price INT)";
    var sql_addColumn = "ALTER TABLE products ADD COLUMN targetGroup INT";
    var sql_dropColumn = "ALTER TABLE customers DROP COLUMN targetGroup";
    // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql_dropColumn, function (err, result) {
      if (err) throw err;
      console.log("Table altered");
    });
  });