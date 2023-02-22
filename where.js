var mysql = require("mysql");

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"headstrong312",
    database:"mydb"
})

con.connect(function(err){
    if(err) throw err;
    var sql = "SELECT * from products WHERE targetGroup = 'female'"
    con.query(sql,function(err,result,fields){
        if (err) throw err;
        console.log(result)
    })
})