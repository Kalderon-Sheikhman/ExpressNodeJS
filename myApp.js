require('dotenv').config()
let express = require('express');
let app = express();
console.log("Hello World");



app.use(function middleware(req, res, next) {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    next();
  });


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req,res) => {
    res.json(process.env.MESSAGE_STYLE==="uppercase" ? {"message": "HELLO JSON"}: {"message": "Hello json"});   
});




































 module.exports = app;
