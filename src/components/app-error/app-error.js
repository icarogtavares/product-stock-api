const httpStatus = require('http-status');

class AppError extends Error {
  /**
   * @param {String} description - Descrição do erro encontrado
   * @param {Number} status - Status code da requisição
   * @param {boolean} isOperational - true é um erro esperado, false se é inesperado
   */
  constructor (description, status = httpStatus.BAD_REQUEST, isOperational = true) {
    super(description);
    this.status = status;
    this.description = description;
    this.isOperational = isOperational;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this);
    } else {
      this.stack = (new Error(description)).stack;
    }
  }
}

module.exports = AppError;
