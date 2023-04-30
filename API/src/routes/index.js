const express = require('express');
const router = express.Router();

const loginRoutes = require('./login');
const userRouter = require('./usuarios');
const equipoRoutes = require('./equipos');
const espacioRoutes = require('./espacios');

router.use('',loginRoutes);

router.use('',express.json());

router.use('/users',userRouter);
router.use('/equipos',equipoRoutes);
router.use('/espacios',espacioRoutes);

module.exports = router;