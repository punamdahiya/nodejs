
/*
 * GET home page.
 */

module.exports  = function (app) {
/*exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};*/

var tweets =[];
app.get("/", function(req, res){ 

res.render('index', {locals :
{
'tweets':tweets
}
}); 

});

app.post('/send',function(req,res){
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
}
