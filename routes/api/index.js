// Dependencies
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
// Use Routers
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
// Module Exports
module.exports = router;