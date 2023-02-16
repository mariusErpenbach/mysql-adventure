var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'headstrong312',
    database:'mydb'
})

con.connect(function(err){
    if(err) throw err;

    console.log("Connected")

    var sql = "INSERT INTO products (name,price,targetGroup) VALUES ('Airmax',120 ,'unisex')"
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log("1 product inserted")
    })
})

