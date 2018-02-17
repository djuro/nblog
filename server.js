'use strict';

var express = require('express');
const session = require('./session');
const passport = require('passport');
require('./auth')();

var app = express();
app.set('port', process.env.PORT || 80);
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(session);
app.use(passport.initialize());
app.use(passport.session());
// define routes here..
app.get('/', function (req, res, next) {
    res.render('posts');
});

app.get('/new-post', function (req, res, next) {
    res.render('new_post');
});
app.get('/login', function(req, res, next) {
  res.render('login', {'pageTitle': 'Login Page'});
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/new-post');
});
// app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//   'successrRedirect': '/new-post',
//   'failureRedirect': '/'
// }));
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
