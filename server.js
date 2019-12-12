
var express = require("express");

var bodyParser = require("body-parser");
// var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static("app/public"));

require("./route/apiRoutes")(app);
require("./route/htmlRoutes")(app);

// app.listen(PORT, function () {
//   console.log('App listening on PORT: ' + PORT);
// });

app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
});


// => console.log('Listening on PORT: ' + PORT));

// console.log("Server listening on: http://localhost:" + PORT);
