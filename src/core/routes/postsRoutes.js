const { createPost, getAll } = require('../../posts/posts');

const router = require('express').Router();

router.get('/', getAll);
router.post('/create', createPost);

module.exports = router;
