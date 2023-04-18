const express = require('express');
const router = express.Router();

const userRouter = require('./usuarios');
const equipoRoutes = require('./equipos');

router.use('',express.json());

router.use('/users',userRouter);
router.use('/equipos',equipoRoutes);

module.exports = router;