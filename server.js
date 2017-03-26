var express = require('express');
var app = express();
var http = require('http');

app.set('port', (process.env.PORT || 3000));

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    // console.log("Https so redirect");
    res.redirect('http://' + req.hostname + req.url);
  } else {
  	next();
  	// console.log("Already http");
  }
});

app.use(express.static('public'));

http.createServer(app).listen(app.get('port'), function(){
	var environment = process.env.NODE_ENV || 'development';
	console.log('Node app is running on port', app.get('port'));
});
