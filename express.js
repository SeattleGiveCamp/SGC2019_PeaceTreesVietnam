const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "8080",
  user: "root",
  password: "example",
  database: "Vietnam"
});

connection.connect();

console.log("Connected +++++++++++++++++++++++++");

connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

connection.end();
