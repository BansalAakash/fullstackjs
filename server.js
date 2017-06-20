var apiRouter = require('./api');
var path = require('path');
var express = require('express');
var app = express();
var config = require('./config');

console.log("Listening...");

var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public';
app.set("view engine", "ejs");

// var serverRender = require('./serverRender');
import serverRender from './serverRender';

app.get('/', (req, res) => {
	serverRender().then(({initialMarkup, initialData})=>{
		console.log("***INSIDE views/index.ejs")
		res.render("index", {
			initialMarkup, initialData
			});				//index.ejs in views folder
	}).catch(console.error);
});

app.use('/api', apiRouter);
app.use(express.static('public'));

app.listen(config.port, config.host , ()=>{
	console.log("Listenening on " + config.port + config.host + config.serverUrl);
});