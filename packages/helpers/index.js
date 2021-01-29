const logger = require('./src/logger/winston');
const { cutPathFromFolder } = require('./src/utils/stack-info');
const { decodeBase64 } = require('./src/utils/base64');
const errorCodes = require('./src/errors/errorCodes');

module.exports = {
  logger,
  cutPathFromFolder,
  decodeBase64,
  errorCodes,
};
