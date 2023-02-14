var mysql = require('mysql'); //Node.js can use this module to manipulate the MySQL database:

var con = mysql.createConnection({ // we create a connection with createConnection()
  host: "localhost",
  user:"root",
  password: "headstrong312"
});

con.connect(function(err) { // we connect to the connection.  
  
  if (err) throw err; // if we got an error, just throw it to user.

  console.log("Connected!"); // show user he is connected

  con.query("CREATE DATABASE mydb", function (err, result) { // we send a query to the connection. 
    // our query "CREATE DATABASE" creates a database in mysql with the name of "mydb" 
    if (err) throw err; // if there is an error, throw it. 
   
    console.log("Database created"); // show user the database was created.

  });

});