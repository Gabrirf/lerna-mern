function getUsers(req, res, next) {
  return res.status(200).send('pong');
}

function getUserId(req, res, next) {
  return res.status(200).send(req.params.id);
}

function createUser(req, res, next) {
  return res.status(201).send({ message: 'Created' });
}

module.exports = {
  getUsers,
  getUserId,
  createUser,
};
