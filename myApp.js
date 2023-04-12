require('dotenv').config()
let express = require('express');
let app = express();
console.log("Hello World");

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html" );
    //res.send("Hello Express");
});
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req,res) => {
    
    app.get("/", (req,res) => {
        if (process.env.MESSAGE_STYLE==="uppercase"){
            return res.json({
                "message":"HELLO JSON"
            });
        } else {
            return res.json({
                "message":"Hello json"
            })
        }
    })
});



































 module.exports = app;
