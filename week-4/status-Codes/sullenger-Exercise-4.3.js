/*
============================================
; Title:  sullenger-Exercise-4.3.js
; Author: Jason Sullenger
; Date:   15 March 2019
; Description: tests output messages for codes 404, 200, and 501
;===========================================
*/

// Console logs the header created previously
const header = require('../../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "status-Codes"));

var express = require("express");
var http = require("http");

var app = express();

app.get("/not-found", function(req, res){
  res.status(404);
  res.json({
    error: "This page is not found."
  });
});

app.get("/ok", function(req, res){
  res.status(200);
  res.json({
    message: "Success!"
  });
});

app.get("/not-implemented", function(req, res){
  res.status(501);
  res.json({
    error: "Page not implemented."
  })
})

// Creates a server on port 8080
http.createServer(app).listen(8080, function(){
  console.log("\nWe are live on port 8080!")
})