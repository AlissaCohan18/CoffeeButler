const router = require('express').Router();
const userRoutes = require('./user-routes');
const NewOrderRoutes = require('./NewOrder-routes');

router.use('/NewOrder', NewOrderRoutes);
router.use('/users', userRoutes);

module.exports = router;