var express = require('express');	// express.js
var path = require('path');			// path module
var app = express();				// start express
var defaultPort = 3000;				// default port

// define a public folder for resources (Fonts, images, js, css)
app.use(express.static(__dirname + '/public'));
// tell express to use handlebars for views
// find all our views
app.set('views', path.join(__dirname, '/views'));
// set our view engine (or template framework)
app.set('view engine', 'hbs');


app.get('/', function(req, res, next) {
	var birthday = {
		candles: 27,
		cake: 'Mochi Cake',
		dish: 'Tapanaki',
		movie: 'Independence Day: Resurgence'
	};
	res.json(birthday);
});

app.get('/birthday', function(req, res, next) {
	res.render('birthday', {
		message: 'yolo 2016 russell'
	});
});

// start listening for my server
app.listen(process.env.PORT || defaultPort);
console.log('Happy Birthday, Russell McBain');