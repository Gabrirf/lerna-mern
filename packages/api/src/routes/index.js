const { Router } = require('express');

const users = require('./users');

const router = Router();

router.use('/users', users);

module.exports = router;
