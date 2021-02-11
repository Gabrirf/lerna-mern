const { Router } = require('express');

const { getUsers, getUserId, createUser } = require('../controllers/users');

const router = Router();

router.get('', getUsers);
router.post('', createUser);
router.get('/:id', getUserId);

module.exports = router;
