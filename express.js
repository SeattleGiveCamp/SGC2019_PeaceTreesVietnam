const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", getProject);
app.get("/Project", getProject);
app.get("/Ordnance", getOrdnance);
app.post("/Project", postProject);

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
    else console.log("Sent Projects");
    console.log(results);
    res.send(results);
  });
}

function postProject(req, res) {
  // Sanity check the required fields. Front end will not send
  // missing required fields, but protect against url hacking.
  var latitude = "";
  if (!req.body.latitude) {
    res.status(400);
    res.send("No latitude specified");
    return;
  } else {
    latitude = req.body.latitude;
  }
  var longitude = "";
  if (!req.body.longitude) {
    res.status(400);
    res.send("No longitude specified");
    return;
  } else {
    longitude = req.body.longitude;
  }
  var projectName = "";
  if (!req.body.projectName) {
    res.status(400);
    res.send("No projectName specified");
    return;
  } else {
    projectName = req.body.projectName;
  }
  
  var projectType = "";
  if (req.body.projectType) {
    projectType = req.body.projectType;
  }
  var description = "";
  if (req.body.description) {
    description = req.body.description;
  }
  var sponsors = "";
  if (req.body.sponsors) {
    sponsors = req.body.sponsors;
  }
  var dedicatedTo = "";
  if (req.body.dedicatedTo) {
    dedicatedTo = req.body.dedicatedTo;
  }
  var projectStatus = "";
  if (req.body.projectStatus) {
    projectStatus = req.body.projectStatus;
  }
  var completedYear = "";
  if (req.body.completedYear) {
    completedYear = req.body.completedYear;
  }
  var plantedYear = "";
  if (req.body.plantedYear) {
    plantedYear = req.body.plantedYear;
  }
  var imageUrl = "";
  if (req.body.imageUrl) {
    imageUrl = req.body.imageUrl;
  }
  var pageUrl = "";
  if (req.body.pageUrl) {
    pageUrl = req.body.pageUrl;
  }

  let locationSQL =
    "INSERT INTO Location (latitude, longitude) VALUES (?,?);";
  connection.query(locationSQL, [latitude, longitude], function(err, results, fields){
    if(err) {
      console.log(err)
      res.status(400);
      res.send(err);
      return;
    } else {
      console.log("Inserted Location" + results.insertId);
      locationID = results.insertId;
        let projectSQL =
          "INSERT INTO Project (" +
          "projectName," +
          "projectType," +
          "description," +
          "sponsors," +
          "dedicatedTo," +
          "projectStatus," +
          "completedYear," +
          "plantedYear," +
          "imageUrl," +
          "pageUrl," +
          "location_id" +
          ") VALUES (?,?,?,?,?,?,?,?,?,?,?);";
      connection.query(
        projectSQL,
        [projectName, projectType, description, sponsors, dedicatedTo, projectStatus, completedYear, plantedYear, imageUrl, pageUrl, locationID],
        function(err, results, fields){
          if(err) {
            console.log(err)
            res.status(400);
            res.send(err);
            return;
          } else {
            console.log("Inserted Project" + results.insertId);
          }
        });
    }
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

app.listen(3000, () => {
  console.log("Listening on 3000");
  console.log("Go to http://localhost:3000/ to see posts");
});
