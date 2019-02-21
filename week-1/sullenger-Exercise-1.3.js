/*
============================================
; Title:  sullenger-Exercise-1.3.js
; Author: Jason Sullenger
; Date:   20 February 2019
; Description: Node.js Modules
;===========================================
*/

// Console logs the header created previously
const header = require('../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 1.3"));


var url = require("url");

var parsedURL = url.parse('https://www.facebook.com/profile?name=Denver');

console.log("\n" + parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
