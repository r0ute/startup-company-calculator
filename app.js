var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');

var componentRouter = require('./routes/components');
var moduleRouter = require('./routes/modules');
var featureRouter = require('./routes/features');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/components', componentRouter);
app.use('/api/modules', moduleRouter);
app.use('/api/features', featureRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

var dbCfg;

try {
    dbCfg = require('./config/db-override');
} catch (e) {
    dbCfg = require('./config/db')
}

mongoose.connect(dbCfg.uri, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.info("Successfully connected to db");
});

module.exports = app;
