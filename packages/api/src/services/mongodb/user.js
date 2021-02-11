const { User } = require('models');

async function createUser(user) {
  const createdUser = new User(user);
  return createdUser.save();
}

module.exports = {
  createUser,
};
