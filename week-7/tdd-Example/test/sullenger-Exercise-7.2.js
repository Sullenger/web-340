/*
============================================
; Title:  sullenger-Exercise-7.2.js
; Author: Jason Sullenger
; Date:   3 April 2019
; Description: Using mocha for TDD, splitting into an array
;===========================================
*/

var assert = require("assert");

// Test defined to split data on a comma into an array
describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});


