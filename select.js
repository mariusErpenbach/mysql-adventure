var mysql = require ("mysql")

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"headstrong312",
    database:"mydb"
})

con.connect(function(err){
    if (err) throw err;
    // SELECT * will return all columns.

    var sql = "SELECT * FROM products"
    con.query (sql, function (err, result, fields){
        if(err) throw err;
        console.log(result[1].price)

    })
})