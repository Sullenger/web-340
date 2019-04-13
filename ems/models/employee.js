/*
============================================
; Title:  EMS
; Author: Professor Krasso
; Date:   07 April 2019
; Modified By: Jason Sullenger
; Description: Employee EMS App
; ============================================
*/

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// employeeSchema defined
var employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

// employee model defined
var Employee = mongoose.model("Employee", employeeSchema);

// make module accesible with export
module.exports = Employee;
