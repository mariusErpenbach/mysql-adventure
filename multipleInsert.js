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
// SQL STATEMENT: 
// we INSERT INTO the table "products", we specify the column we want to fill. after the column specification we declare the data we want to use.
var sql="INSERT INTO products (name,price,targetGroup,productCategorie) VALUES ?" 
var values = [
    // name, price, gender, categorie.
    ["Superstar",100,"unisex","shoe"],
    ["Chucks",60,"unisex","shoe"],
    ["Polar",55,"unisex","pants"],
    ["Jupiter",80,"male","pants"],
    ["Venus",45,"female","pants"],
    ["Dumbbells PRO",25,"unisex","sport"],
    ["Hockey Terminator",20,"unisex","sport"]
]


con.query(sql,[values],function(err,result){ // we pass the values as an additional parameter to the query() call.
    if(err)throw err;
    console.log("multiple products added")
})

})