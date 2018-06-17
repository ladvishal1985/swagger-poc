var express = require('express');
var router = express.Router();
var weatherRoutes = require('./weather');
var userRoutes = require('./users');

router.use('/weather', weatherRoutes);
router.use('/users', userRoutes);

module.exports = router;
