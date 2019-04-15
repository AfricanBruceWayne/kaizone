var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});


var port = process.env.PORT || 7500;

app.listen(port, () => console.log(`Server started on port ${port}`));