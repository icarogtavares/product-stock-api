const status = require('http-status');
const sequelize = require('sequelize');
const { logger } = require('../../bin/logger');

/**
 * Retorna se um erro é esperado ou não
 * @param {Error} error - Objeto do tipo Error
 */
const isTrustedError = error => error.isOperational;

/**
 * Trata o erro recebido
 * @param {Error} error - Objeto do tipo Error
 */
const handleError = (error) => {
  let errorHandled = error;

  if (errorHandled instanceof sequelize.ValidationError) {
    errorHandled = Object.assign({}, {
      status: status.BAD_REQUEST,
      isOperational: true,
    }, error);
  } else if (errorHandled.name === 'UnauthorizedError') {
    errorHandled = Object.assign({}, {
      status: status.UNAUTHORIZED,
      isOperational: true,
    }, error);
  }

  if (isTrustedError(errorHandled)) {
    logger.error(errorHandled.description || errorHandled.message);
  } else {
    logger.error(errorHandled.stack);
  }

  return errorHandled;
};

module.exports = {
  isTrustedError,
  handleError,
};
