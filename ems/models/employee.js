var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// employeeSchema define
var employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

// employee model defined
var Employee = mongoose.model("Employee", employeeSchema);

// make module accesible with export
module.exports = Employee;