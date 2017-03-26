var express = require('express');

// Create our app
var app = express();

// Server statics
app.use(express.static('public'));

// Listen
app.listen(3000, function() {
	console.log("Express running at 3000");
});