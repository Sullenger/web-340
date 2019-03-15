/*
============================================
; Title:  sullenger-Assignment-4.4.js
; Author: Jason Sullenger
; Date:   15 March 2019
; Description: tests curl requests for GET, POST, PUT, and DELETE
;===========================================
*/

// Console logs the header created previously
const header = require('../../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "cURL"));

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(req, res){
    res.send("Your GET request has been GOTTEN");
});

app.put("/", function(req, res){
    res.send("The SEND request was successfuly SENT");
});

app.post("/", function(req, res){
    res.send("The POST request has POSTED");
});

app.delete("/", function(req, res){
    res.send("Stuff was DELETED due to your DELETE request");
});

http.createServer(app).listen(8080, function(){
    console.log("\nWe are live on port 8080!")
})