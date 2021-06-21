const express = require('express');
const { getUser, getUsers } = require('../../users/users');

const router = express.Router();
router.get('/:id?', getUsers);

module.exports = router;
