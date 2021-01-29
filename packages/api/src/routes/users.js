const { Router } = require('express');

const { getUsers, getUserId } = require('../controllers/users');

const router = Router();

router.get('', getUsers);
router.get('/:id', getUserId);

module.exports = router;
