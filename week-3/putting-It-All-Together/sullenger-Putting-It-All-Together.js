/*
============================================
; Title:  sullenger-Putting-It-All-Together.js
; Author: Jason Sullenger
; Date:   08 March 2019
; Description:Tests routing to Home, Contact, about, and products page
;===========================================
*/

// Console logs the header created previously
const header = require('../../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Putting It All Together"));

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

app.get("/", function(req,res){
    res.render("index", {
        message: "Home Page"
    });
});

app.get("/about", function(req,res){
    res.render("about", {
        message: "About Page"
    });
});

app.get("/contact", function(req, res){
    res.render("contact", {
        message: "Contact Page"
    });
});

app.get("/products", function(req,res){
    res.render("products", {
        message: "Products Page"
    });
});

// Creates app on 8080
http.createServer(app).listen(8080, function(){
    console.log("\nApp started on 8080");
});