var express = require("express");
var http = require("http");

var app = express();

app.get("/customer/:id", function(req, res){
  var id = parseInt(req.params.id, 10);
  res.json({
    firstName: "Jason",
    lastName: "Sullenger",
    employeeid: id,
    city: "Boise",
    state: "ID",
    email: "jsullenger@notReal.com"
  });
});

http.createServer(app).listen(8080, function(){
  console.log("We are live on port 8080!");
});
