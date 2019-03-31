/*
============================================
; Title:  EMS
; Author: Jason Sullenger
; Date:   21 March 2019
; Description:
;===========================================
*/

// Console logs the header created previously
const header = require("../sullenger-header");
console.log(header.display("Jason", "Sullenger", "EMS"));

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views/"));

app.set("view engine", "ejs");

// Logging Morgan
app.use(logger("short"));

// Styling fix from Overstack
app.use(express.static(__dirname + '/public'));

// Routing
app.get("/", function(req, res) {
  res.render("index", {
    title: "Homepage"
  });
});

// Creates app
http.createServer(app).listen(8080, function() {
  console.log("We are live on 8080!");
});
