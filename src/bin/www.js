/* eslint-disable no-use-before-define, no-shadow, no-restricted-globals */

const debug = require('debug')('product-stock-api:server');
const http = require('http');

const app = require('../app');
const { errorManagement } = require('../components/app-error');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
process.on('uncaughtException', onUncaughtException);
process.on('unhandledRejection', onUnhandledRejection);

function normalizePort (val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

function onListening () {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

function onUncaughtException (error) {
  errorManagement.handleError(error);
  if (!errorManagement.isTrustedError(error)) {
  // eslint-disable-next-line
    process.exit(1)
  }
}

function onUnhandledRejection (reason) {
  /* I just caught an unhandled promise rejection,
    since we already have fallback handler for unhandled errors (see below),
    let throw and let him handle that
    https://github.com/i0natan/nodebestpractices/blob/master/sections/errorhandling/catchunhandledpromiserejection.md
  */
  throw reason;
}
