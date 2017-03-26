var express = require('express');

// Create our app
var app = express();

// Middleware
app.use(function(req, res, next) {
	if (req.headers['x-forward-proto'] === 'http') {
		next();
	} else {
		res.redirect("http://" + req.hostname + req.url);
	}
});

// Server statics
app.use(express.static('public'));

// Port
const PORT = process.env.PORT || 3000;

// Listen
app.listen(PORT, function() {
	console.log("Express running at " + PORT);
});