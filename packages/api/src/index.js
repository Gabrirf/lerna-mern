const { logger } = require('helpers');
const app = require('./app');
const config = require('./config');

const { port } = config.app;

app.listen(port, err => {
  if (err) {
    logger.error(err);
    return;
  }
  logger.info(`App listening on port ${port}!`);
});
