const mongodbLoader = require('./mongodb');
const expressLoader = require('./express');

function init(app, config) {
  expressLoader(app, config.security);
  mongodbLoader(config.mongodb);
}

module.exports = {
  init,
};
