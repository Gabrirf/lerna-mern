const mongoose = require('mongoose');

const User = require('./src/user');

mongoose.set('useCreateIndex', true);
const { connect } = mongoose;

module.exports = {
  connect,
  User,
};
