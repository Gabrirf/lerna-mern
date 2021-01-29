const path = require('path');
const express = require('express');
const loaders = require('./loaders');
const config = require('./config');

const app = express();

if (process.env.NODE_ENV === 'production') {
  const buildPath = path.resolve(__dirname, '../../front/build');
  app.use(express.static(buildPath));
}

loaders.init(app, config);

module.exports = app;
