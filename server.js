var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use("/api/llibres", require("./controllers/api/llibres"));
app.use("/",require("./controllers/static"));

//process.env.PORT
app.listen(process.env.PORT , function() {
    console.log("Server started on", process.env.PORT);
});
