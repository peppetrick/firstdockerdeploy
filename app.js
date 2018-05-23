//simple app that answer messsages on a port
var express = require('express');
var app = express();

//if yoou need a body parsing service

var bodyParser =  require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
 

//get alert list to display on web admin page
app.get('/ask', function (req, res, next) {
  console.log('get request');
  next();
}, function (req, res) {
    console.log("sent response")
   res.send(JSON.stringify({"answer":"ok"}));
});

app.listen(server_port,server_ip_address, function () {
    console.log( "Listening on " + server_ip_address + ", port " + server_port )
  });

  