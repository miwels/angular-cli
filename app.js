var express = require('express');
var path = require('path');
var logger = require('morgan');

var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var database = 'angulartest';

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(function(req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/' + database, function(err, db) {
        if(err) throw err;
        console.log('Connected to the MongoDB service');
        req.db = db;
        next();
    });
});

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/app', express.static(__dirname + '/public/app'));

// as per Express 2
var routes = require('./routes/index');
app.use('/', routes);
var apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;