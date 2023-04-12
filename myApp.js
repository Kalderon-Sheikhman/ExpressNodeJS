let express = require('express');
let app = express();
console.log("Hello World");

const outConsole = (req,res) => {
    res.send("Hello Express");
};
app.get("/",outConsole);




































 module.exports = app;
