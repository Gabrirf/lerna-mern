const winston = require('winston');

const { getStackInfo } = require('../utils/stack-info');
const options = require('../../config').winston;

const { format, transports, createLogger } = winston;

const {
  combine, timestamp, printf, colorize,
} = format;

const logger = createLogger({
  transports: [
    new transports.Console({
      ...options.console,
      format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        colorize(),
        printf(info => `[${info.timestamp}] ${info.level} ${info.message}`),
      ),
      silent: process.env.NODE_ENV === 'test',
    }),
  ],
  exitOnError: false,
});

/**
   * Attempts to add file and line number info to the given log arguments.
   */
function formatLogArguments(args) {
  const argsArray = Array.prototype.slice.call(args);

  const stackInfo = getStackInfo(1);
  let calleeStr = '';
  if (typeof (argsArray[1]) === 'string') {
    calleeStr = `(${argsArray[1]})`;
  } else if (stackInfo) {
    // get file path relative to project root
    calleeStr = `(${stackInfo.relativePath}:${stackInfo.line})`;
  }

  if (typeof (argsArray[0]) === 'string') {
    argsArray[0] = `${calleeStr} ${argsArray[0]}`;
  } else {
    argsArray.unshift(calleeStr);
  }

  return argsArray;
}

// A custom logger interface that wraps winston, making it easy to instrument
// code and still possible to replace winston in the future.

const debug = function debug(...args) {
  logger.debug(...formatLogArguments(args));
};

const info = function info(...args) {
  logger.info(...formatLogArguments(args));
};

const warn = function warn(...args) {
  logger.warn(...formatLogArguments(args));
};

const error = function error(...args) {
  logger.error(...formatLogArguments(args));
};

const log = logger;
const { stream } = logger;

module.exports = {
  debug,
  info,
  warn,
  error,
  log,
  stream,
};
