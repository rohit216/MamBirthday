var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./index');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  //indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true,
  debug: true,
    outputStyle: 'compressed'

}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.set('view engine', 'html');

module.exports = app;
