var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res, next){
    res.status(200).sendFile(__dirname + "/public/main.html");
});

app.get('/Home', function(req, res, next){
    res.status(200).sendFile(__dirname + "/public/main.html");
})

app.get('/Class/:Class', function(req, res, next){
    res.status(200).sendFile(__dirname + "/Class/Class.html");
});

app.get('/Discussion/:Discussion', function(req, res, next){
    res.status(200).sendFile(__dirname + "/Discussion/Discussion.html");
})

app.get('/Article', function(req, res, next){
    res.status(200).sendFile(__dirname + "/Article/Article.html");
})

app.get('*', function(req, res, next){
    /*
    res.status(200);
    res.send("<html><body><h1>404</h><h2>Page not found</h></body></html>"); 
    */
   res.status(200).sendFile(__dirname + "/main.html");
})



app.listen(8000, function () {
  console.log("== Server is listening on port !!!");
});