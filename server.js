var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var port = 3000;

app.get('/', function(req, res, next) {
    var html = fs.readFileSync('views/index.html', 'utf8')
    res.send(html);
});

app.get('/', function(req, res, next) {
    var html = fs.readFileSync('views/index.html', 'utf8')
    res.send(html);
});

app.use("/public", express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Ready. Listening on port:', port);
});

