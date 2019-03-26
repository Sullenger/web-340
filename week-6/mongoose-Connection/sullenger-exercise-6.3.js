/*
============================================
; Title:  sullenger-Exercise-6.3.js
; Author: Jason Sullenger
; Date:   25 March 2019
; Description:testing connection to mLab DB sandbox
;===========================================
*/

// Console logs the header created previously
const header = require('../../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "mongoose-Connection"));

var express = require("express");
var http  = require("http");
var logger = require("morgan")
var mongoose = require("mongoose");

var mongoDB = "mongodb+srv://user_208:bznXR3on@ems-nhomg.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance")
})

var app = express();
app.use(logger("dev"));

http.createServer(app).listen(8080, function(){
  console.log("We are live on 8080")
});