var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var port = 3000;

app.get('/', function(req, res, next) {
    var html = fs.readFileSync('views/index.html', 'utf8')
    res.send(html);
});

app.get('/about-us', function(req, res, next) {
    var html = fs.readFileSync('views/about-us.html', 'utf8')
    res.send(html);
});

app.get('/platforms', function(req, res, next) {
    var html = fs.readFileSync('views/platforms.html', 'utf8')
    res.send(html);
});

app.get('/trading-options', function(req, res, next) {
    var html = fs.readFileSync('views/trading-options.html', 'utf8')
    res.send(html);
});


app.get('/clients', function(req, res, next) {
    var html = fs.readFileSync('views/clients.html', 'utf8')
    res.send(html);
});

app.get('/open-account', function(req, res, next) {
    var html = fs.readFileSync('views/open-account.html', 'utf8')
    res.send(html);
});

app.get('/news', function(req, res, next) {
    var html = fs.readFileSync('views/news.html', 'utf8')
    res.send(html);
});

app.get('/bonuses', function(req, res, next) {
    var html = fs.readFileSync('views/bonuses.html', 'utf8')
    res.send(html);
});

app.get('/contact', function(req, res, next) {
    var html = fs.readFileSync('views/contact.html', 'utf8')
    res.send(html);
});

app.use("/public", express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Ready. Listening on port:', port);
});

