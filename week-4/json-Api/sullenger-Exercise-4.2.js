/*
============================================
; Title:  sullenger-Exercise-4.2.js
; Author: Jason Sullenger
; Date:   15 March 2019
; Description: tests a get request by returning a JSON object
;===========================================
*/

// Console logs the header created previously
const header = require('../../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "json-API"));

var express = require("express");
var http = require("http");

var app = express();

app.get("/customer/:id", function(req, res){
  var id = parseInt(req.params.id, 10);
  res.json({
    firstName: "Jason",
    lastName: "Sullenger",
    employeeid: id,
    city: "Boise",
    state: "ID",
    email: "jsullenger@notReal.com"
  });
});

// Creates server on 8080
http.createServer(app).listen(8080, function(){
  console.log("\nWe are live on port 8080!");
});
