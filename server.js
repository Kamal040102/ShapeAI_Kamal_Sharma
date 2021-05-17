const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname +'/index.html');
});

app.post('/', function(req, res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    const sum = num1/(num2*num2);
    res.send(`Your BMI is <b>${sum}<b>`);
});

app.listen(80 , function(){
    console.log("Server has been started on http://127.0.0.1:80");
});