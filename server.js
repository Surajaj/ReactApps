var express = require('express');
var app = express();
var http = require('http');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.use(express.static('public'));

http.createServer(app).listen(app.get('port'), function(){
	var environment = process.env.NODE_ENV || 'development';
	console.log('Node app is running on port', app.get('port'));
});
