/*
============================================
; Title:  sullenger-Exercise-5.3.js
; Author: Jason Sullenger
; Date:   21 March 2019
; Description: Rendering HTML with pug-Template
;===========================================
*/

// Console logs the header created previously
const header = require('../../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "pug-Template"));

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(req,res){
  res.render("index",{
    message: "First attempt PUG homepage"
  })
})

http.createServer(app).listen(8080, function(){
  console.log("We are live on 8080!")
})