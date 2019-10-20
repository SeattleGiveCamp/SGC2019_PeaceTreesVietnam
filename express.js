const express = require("express");
const mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
  host: "localhost",
  user: "peacetrees_admin",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: "PeaceTrees_Vietnam",
  port: "3306"
});

const app = express();
connection.connect();
app.get("/", getData);

function getData(req, res) {
  let SQL="SELECT * FROM Location";
  connection.query(SQL, function(err, results, fields){
    if(err) console.log(err);
    else console.log("Connected!");
    console.log(results);

    res.send(results);
  });
}

app.listen(3000, () => {
  console.log("Listening on 3000");
  console.log("Go to http://localhost:3000/ to see posts");
});
