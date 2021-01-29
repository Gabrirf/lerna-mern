function getUsers(req, res, next) {
  return res.status(200).send('pong');
}

function getUserId(req, res, next) {
  return res.status(200).send(req.params.id);
}

module.exports = {
  getUsers,
  getUserId,
};
