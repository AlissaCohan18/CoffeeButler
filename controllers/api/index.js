const router = require('express').Router();
const userRoutes = require('./user-routes');
const orderRoutes = require('./order-routes');

router.use('/order', orderRoutes);
router.use('/users', userRoutes);

module.exports = router;