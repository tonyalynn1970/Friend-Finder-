
var express = require("express");


var path = require("path")
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(express.static("app/public"));

require("./route/apiRoutes")(app);
require("./route/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log("Listening on PORT:" + PORT)
});






