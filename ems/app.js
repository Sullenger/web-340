/*
============================================
; Title:  EMS
; Author: Jason Sullenger
; Date:   21 March 2019
; Description:
;===========================================
*/

// Console logs the header created previously
const header = require("../sullenger-header.js");
console.log(header.display("Jason", "Sullenger", "EMS"));

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views/"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(req, res) {
  res.render("index", {
    title: "Homepage"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("We are live on 8080!");
});
