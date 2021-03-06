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
// const header = require("../sullenger-header");
// console.log(header.display("Jason", "Sullenger", "EMS"));

var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

var Employee = require("./models/employee");

// CSRF setup
var csrfProtection = csrf({ cookie: true });

var app = express();

// connection to mLab
var mongoDB =
  "mongodb+srv://user_208:bznXR3on@ems-nhomg.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

// Use statements
app.use(helmet.xssFilter());

app.use(logger("short"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});

var employee = new Employee({
  firstName: "John",
  lastName: "Smith"
});

app.set("views", path.resolve(__dirname, "views/"));

app.set("view engine", "ejs");

app.set("port", process.env.PORT || 8080)

// Logging Morgan
app.use(logger("short"));

// Styling fix from Overstack
app.use(express.static(__dirname + "/public"));

// Routing
app.get("/", function(req, res) {
  res.render("index", {
    title: "Homepage"
  });
});

app.get("/new", function(req, res) {
  res.render("new", {
    title: "New Employee"
  });
});

app.post("/process", function(req, res) {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(400).send("Entries require a name");
    return;
  }
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  var newEmployee = console.log(newEmployee);

  // Create employee model
  var newEmployee = new Employee({
    firstName,
    lastName
  });

  // save
  newEmployee.save(function(error) {
    if (error) throw error;
    console.log(newEmployee + " saved successfully");
  });
  res.redirect("/list");
});

app.get("/list", function(req, res) {
  Employee.find({}, function(error, employees) {
    if (error) throw error;

    res.render("list", {
      title: "Employee List",
      employees: employees
    });
  });
});

app.get("/view/:queryName", function(req, res) {
  var queryName = req.params.queryName;
  Employee.find({ firstName: queryName }, function(error, employees) {
    if (error) throw error;
    console.log(employees);
    if (employees.length > 0) {
      res.render("view", {
        title: "Employee Record",
        employee: employees
      });
    } else {
      res.redirect("/list");
    }
  });
});

// Creates app
http.createServer(app).listen(app.get("port"), function() {
  console.log("We are live on " + app.get("port") + "!");
});
