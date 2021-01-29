const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('../routes');

module.exports = (expressApp, config) => {
  expressApp.use(cors());
  expressApp.use(bodyParser.json({ limit: '50mb' }));
  expressApp.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  expressApp.use('/api/v1', routes);
  expressApp.use((req, res) => res.status(404).send('Not Found'));
};
