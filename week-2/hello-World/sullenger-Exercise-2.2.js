/*
============================================
; Title:  sullenger-exercise-2.2.js
; Author: Jason Sullenger
; Date:   21 February 2019
; Description: Creating node.js server using express
;===========================================
*/

// Console logs the header created previously
const header = require('../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 2.2"));

var express = require("express");
var http = require("http");
var app = express();

// Console logs Hello World on landing
app.use(function(req, res){
  console.log("In comes a request to: %s", req.url);
  res.end("Hello World\n")
})

// creates server on port 8080
http.createServer(app).listen(8080, function(){
  console.log("Application started on port %s", 8080)
});
