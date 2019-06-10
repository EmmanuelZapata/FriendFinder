// What we neeed!
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Using body-parser to be able to read json in express 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Requires and sets the HTML routes in this file
require('./app/routing/htmlRoutes.js')(app);

// Requires and sets the API routes in this file
require('./app/routing/apiRoutes.js')(app);
