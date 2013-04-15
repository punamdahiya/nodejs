"use strict";
var express = require('express');
var app = express.createServer();

app.get('/',function(req,res){
res.send('welcome to node');
});


app.listen(8181);

