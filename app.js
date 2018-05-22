//simple app that answer messsages on a port
var express = require('express');
var app = express();

//if yoou need a body parsing service

var bodyParser =  require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//get alert list to display on web admin page
app.get('/ask', function (req, res, next) {
  console.log('get request');
  next();
}, function (req, res) {
   res.send(JSON.stringify({"answer":"ok"}));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  