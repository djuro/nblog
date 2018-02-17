'use strict';

const session = require('./session');

var express = require('express');
var app = express();

app.set('port', process.env.PORT || 80);
app.set('view engine', 'ejs');
app.use(session);

// define routes here..
app.get('/', function (req, res, next) {
    res.render('posts');
});

app.get('/new-post', function (req, res, next) {
    res.render('new_post');
});

// app.get('/getsession', function (req, res, next) {
//     res.send('My fav color: ' + req.session.favColor);
// });
//
// app.get('/setsession', function (req, res, next) {
//     req.session.favColor = "Red";
//     res.send("Fav color set.");
// });

var server = app.listen(3000, function () {
    console.log('Node server is running on port: ', 3000);
});
