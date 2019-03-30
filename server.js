// server.js
// load the things we need
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/views'));

app.use(express.static(__dirname + '/homepage'));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');
// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('quizHome');
});
app.get('/detailquestion', function(req, res) {
    res.render('quizDetail');
});
app.get('/quizset', function(req, res) {
    res.render('quizSet');
});


app.listen(8080);
console.log('8080 is the magic port');