/*
============================================
; Title:  sullenger-exercise-2.3.js
; Author: Jason Sullenger
; Date:   21 February 2019
; Description: tests created routes
;===========================================
*/

// Console logs the header created previously
const header = require('../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 2.3"));

var express = require("express");
var http = require("http");
var app = express();

// routing to the homepage
app.get("/", function(req, res){
  res.end("Welcome to the Homepage.\n")
});

// routing to the about page
app.get("/about", function(req, res){
  res.end("Welcome to the About page.\n")
});

// routing to the contact page
app.get("/contact", function(req, res){
  res.end("Welcome to the Contact page.\n")
});

// routing for 404 error
app.use(function(req, res){
  res.statusCode = 404;
  res.end("404!\n")
});

// Server created on port 8080
http.createServer(app).listen(8080, function(){
  console.log("Application started on port %s", 8080)
});
