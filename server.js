// Dependencies
// =============================================================

var express = require("express");

// Sets up the Express App
// =============================================================

var app = express();
var PORT = process.env.PORT || 3000;

// Static directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./index.js");
require("./routing/routes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });