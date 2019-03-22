/*
============================================
; Title:  sullenger-Exercise-5.2.js
; Author: Jason Sullenger
; Date:   21 March 2019
; Description:
;===========================================
*/

// Console logs the header created previously
const header = require('../../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "if-Else-Render"));

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var names = ["Jack", "Jimmy", "Janet", "Jeremy", "Jason", "James"];

app.get("/", function(req, res){
  res.render("index.ejs",{
    names:names
  });
});

http.createServer(app).listen(8080, function(){
  console.log("We are live on 8080!")
});

