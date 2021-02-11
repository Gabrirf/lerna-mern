const { User } = require('models');

async function getUsersByParams(filters) {
  const Users = await User.find(filters);
  if (Users.length > 0) {
    return Users;
  }
  throw new Error('The ansConfig with applied filters does not exist');
}

async function createUser(user) {
  const createdUser = new User(user);
  return createdUser.save();
}

module.exports = {
  createUser,
  getUsersByParams,
};
