/*
============================================
; Title:  sullenger-exercise-3.2.js
; Author: Jason Sullenger
; Date:   07 March 2019
; Description:Tests created routes with Morgan logger
;===========================================
*/

// Console logs the header created previously
const header = require('../../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 3.2"));

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

// Tell express the views are in the "views" directory
app.set("views", path.resolve(__dirname, "views"));

// Tell express to use the EJS view engine
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (req, res){
    res.render("index", {
        message: "Giving the Morgan logger a try"
    });
});

// Creates server on 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080")
});