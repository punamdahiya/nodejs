"use strict";
var express = require('express');
var app = express.createServer();
app.listen(8181);
/*app.get('/',function(req,res){
res.send('welcome to node');
});
*/

var tweets =[];

//app.set('view options', { layout: false });
app.set('view engine', 'ejs');

app.get("/", function(req, res){ 

res.render('index', {locals :
{'tweets':tweets}
}); 

});

app.post('/send',express.bodyParser(),function(req,res){
if(req.body && req.body.tweet){
tweets.push(req.body.tweet);
//res.send({status:"ok",message:"tweet received"});
res.render('index', { locals :
{
'tweets':tweets
}});

} else{
res.send({status:"notok",message:"tweet not received"});
}
});

app.get ('/tweets', function(req,res){
res.send(tweets);
});

