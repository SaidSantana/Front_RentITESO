const router = require('express').Router();
const usersController = require('./../controllers/usuarios');

router.post('/login', usersController.logIn);
router.post('/registro',usersController.registro);

module.exports = router;