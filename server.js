// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
//var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var path = require("path");

app.use(bodyParser.urlencoded({ extended: true}))

app.use(bodyParser.json())

//Routes
//====================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

