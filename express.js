const express = require("express");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "example",
  database: "Vietnam",
  port: "3306"
});

const app = express();

connection.connect();

app.get("/", (req, res)=>{res.send("Hellow world!")});
app.get("/test", getData);

function getData(req, res) {
  console.log("Hahahaha");
  let SQL="SELECT * FROM ProjectInfo";
  connection.query(SQL, function(err, results, fields){
    if(err) console.log(err);
    else console.log("Connected!");
    console.log(results);
  });
}

app.listen(3000, () => {
  console.log("Listening on 3000");
  console.log("Go to http://localhost:3000/ to see posts");
});
