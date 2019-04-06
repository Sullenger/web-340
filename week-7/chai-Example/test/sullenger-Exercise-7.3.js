/*
============================================
; Title:  sullenger-Exercise-7.3.js
; Author: Jason Sullenger
; Date:   6 April 2019
; Description: Testing a function using mocha/chai
;===========================================
*/

var fruits = require("../sullenger-Fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function(){
  it("should return an array of fruits", function(){
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  })
})