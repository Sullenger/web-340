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
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

var Employee = require("./models/employee.js");

// CSRF setup
var csrfProtection = csrf({cookie:true});

var app = express();


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


app.use(helmet.xssFilter());

app.use(logger("short"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(req, res, next){
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

var employee = new Employee({
  firstName: "John",
  lastName: "Smith"
})

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

app.get("/", function(req, res){
  res.render("index", {
    message: "New Employee"
  })
})

app.post("/process", function(req, res){
  console.log(req.body.txtName);
  res.redirect("/");
})

// Creates app
http.createServer(app).listen(8080, function() {
  console.log("We are live on 8080!");
});
