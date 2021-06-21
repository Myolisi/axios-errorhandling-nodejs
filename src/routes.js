const usersRoutes = require('./core/routes/usersRoutes');
const postsRoutes = require('./core/routes/postsRoutes');

const router = require('express').Router();

router.use('/users', usersRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
