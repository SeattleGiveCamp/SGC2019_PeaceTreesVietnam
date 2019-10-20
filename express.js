const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
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
app.use(cors({
  origin: '*',
  credentials: true
}));
app.get("/", getProject);
app.get("/Project", getProject);
app.get("/Ordnance", getOrdnance);

function getProject(req, res) {
  let SQL =
    "SELECT " +
    "Project.projectName AS projectName, " +
    "Project.location AS location, " +
    "Location.latitude AS latitude, " +
    "Location.longitude AS longitude, " +
    "Project.projectType AS projectType, " +
    "Project.description AS description, " +
    "Project.sponsors AS sponsors, " +
    "Project.dedicatedTo AS dedicatedTo, " +
    "Project.projectStatus AS projectStatus, " +
    "Project.completedYear AS completedYear, " +
    "Project.plantedYear AS plantedYear, " +
    "Project.imageUrl AS imageUrl, " +
    "Project.pageUrl AS pageUrl " +
    "FROM Project, Location " +
    "WHERE Project.location_id = Location.id;";
  connection.query(SQL, function(err, results, fields){
    if(err) console.log(err);
    else console.log("Connected!");
    console.log(results);
    res.send(results);
  });
}

function getOrdnance(req, res) {
  let SQL =
    "SELECT " +
    "Location.latitude AS latitude, " +
    "Location.longitude AS longitude, " +
    "FROM Ordnance, Location " +
    "WHERE Ordnance.location_id = Location.id;";
  connection.query(SQL, function(err, results, fields){
    if(err) console.log(err);
    else console.log("Connected!");
    console.log(results);
    res.send(results);
  });
}

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
