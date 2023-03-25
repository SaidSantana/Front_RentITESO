const express = require('express');
const router = express.Router();

const userRouter = require('./usuarios');
const equipoRoutes = require('./equipos');

router.use('', express.json());

router.use('/equipos', equipoRoutes);
router.use('/users',userRouter);

module.exports = router;