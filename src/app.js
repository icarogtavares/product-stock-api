const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const {
  notFoundMiddleware,
  handleErrorMiddleware,
  sendErrorMiddleware,
} = require('./bin/error-middlewares');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);
app.use(sendErrorMiddleware);

module.exports = app;
