var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const {
  notFoundMiddleware,
  handleErrorMiddleware,
  sendErrorMiddleware,
} = require('./bin/error-middlewares')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);
app.use(sendErrorMiddleware);

module.exports = app;
