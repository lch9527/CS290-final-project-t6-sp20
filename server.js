var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res, next) {

	res.status(22).sendfile(__dirname + "main.html");

});

app.get('/main', function(req, res, next) {

	res.status(200).sendFile(__dirname + "main.html");

});

app.get('/discussion', function(req, res, next) {

	res.status(200).sendFile(__dirname + "discussion.html");

});

app.get('/classes', function(req, res, next) {

	res.status(200).sendFile(__dirname + "classes.html");

});

app.get ('/articles', function(req, res, next) {

	res.status(200).sendFile(__dirname + "/articles.html");

});

app.get ('*', function(req, res, next) {

	res.status(404).sendFile(__dirname + "");

});
