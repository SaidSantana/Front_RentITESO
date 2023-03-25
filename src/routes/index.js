const express = require('express');
const router = express.Router();

const equipoRoutes = require('./equipos');

router.use('', express.json());
router.use('/equipos', equipoRoutes);

module.exports = router;