const express = require('express');
let app = express();
app.use(express.static(__dirname + '/public'));

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);



var scoutvotes = [];
var tobyvotes = [];

//-------------------------------
app.get('/', function(req, res) {
	res.render('home'); 
});

app.get('/vote/scout', function(req, res) {

	res.render('scout');

});

app.get('/vote/toby', function(req, res) {

	res.render('toby');

});






//-----------------------------------
app.get('/vote/results', function(req, res) {
	if( req.query.access === 'cuteness') {
		res.render('results');
	  } else {
		res.redirect('/')
	  }
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
