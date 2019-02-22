/*
============================================
; Title:  sullenger-Assignment-1.5.js
; Author: Jason Sullenger
; Date:   21 February 2019
; Description: Creating node.js server
;===========================================
*/

// Console logs the header created previously
const header = require('../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Assignment 1.5"));

// Variable declaration:
var http = require("http");

function processRequest(req, res){
  var body = "Bienvenidos";
  var contentLength = body.length;
  res.writeHead(200, {
    "Content-Length": contentLength,
    "Content-Type": "text/plain"
  })
  res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);

