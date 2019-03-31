const { AppError, errorManagement } = require('./components/app-error')

const notFoundMiddleware = (req, res, next) => {
  const err = new AppError('Request not found', status.NOT_FOUND);
  next(err);
};

const handleErrorMiddleware = (err, req, res, next) => {
  const handledError = errorManagement.handleError(err);
  if (errorManagement.isTrustedError(handledError)) {
    next(handledError);
  } else {
    throw err;
  }
};

// eslint-disable-next-line
const sendErrorMiddleware = (err, req, res, next) => {
  res.locals.message = err.description || err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(res.locals.error);
};

module.exports = {
  notFoundMiddleware,
  handleErrorMiddleware,
  sendErrorMiddleware,
};
