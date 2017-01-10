var express = require('express');
var app = express();
var port = process.env.PORT;
var host = process.env.IP;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.send('Hello Jeffy');
});

app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(port, host, function(err) {
    console.log('running server on port ' + process.env.PORT + ' and host ' + host);
});