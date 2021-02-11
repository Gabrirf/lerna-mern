const { mongodbService } = require('../services');

async function getUsers(req, res, next) {
  const { userName } = req.query;
  const filters = {};
  if (userName) filters.userName = userName;
  const userData = await mongodbService.getUsersByParams(filters);
  return res.status(200).send({ results: userData });
}

function getUserId(req, res, next) {
  return res.status(200).send(req.params.id);
}

function createUser(req, res, next) {
  mongodbService.createUser(req.body);
  return res.status(201).send({ message: 'Created' });
}

module.exports = {
  getUsers,
  getUserId,
  createUser,
};
