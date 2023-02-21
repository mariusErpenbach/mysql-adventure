var mysql = require ('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'headstrong312',
    database:"mydb"
})

con.connect(function(err){
if(err) throw err;
console.log("connected")

var sql="INSERT INTO products (name,price,targetGroup,productCategorie) VALUES ?"
var values = [
    ["Superstar",100,"unisex","shoe"],
    [""]
]


con.query(sql,function(err,result){
    if(err)throw err;
    console.log("multiple products added")
})

})