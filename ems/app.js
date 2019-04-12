/*
============================================
; Title:  EMS
; Author: Professor Krasso
; Date:   21 March 2019
; Modified By: Jason Sullenger
; Description: Employee EMS App
; ============================================
*/

// Console logs the header created previously
const header = require("../sullenger-header");
console.log(header.display("Jason", "Sullenger", "EMS"));

var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var helmet = require("helmet")

var Employee = require("./models/employee.js");

// connection to mLab
var mongoDB = "mongodb+srv://user_208:bznXR3on@ems-nhomg.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise=global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console,"connection error: "));

db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance")
})

var app = express();

app.use(logger("short"));

var employee = new Employee({
  firstName: "John",
  lastName: "Smith"
})

app.use(helmet.xssFilter());

app.set("views", path.resolve(__dirname, "views/"));

app.set("view engine", "ejs");

// Logging Morgan
app.use(logger("short"));

// Styling fix from Overstack
app.use(express.static(__dirname + '/public'));

// Routing
app.get("/", function(req, res) {
  res.render("index", {
    title: "Homepage",
  });
});

// Creates app
http.createServer(app).listen(8080, function() {
  console.log("We are live on 8080!");
});
