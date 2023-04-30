const router = require('express').Router();
const usersController = require('./../controllers/usuarios');

router.post('/login', usersController.logIn);

module.exports = router;