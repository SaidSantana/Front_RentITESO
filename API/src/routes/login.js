const router = require('express').Router();
const usersController = require('./../controllers/usuarios');

router.post('/login', usersController.logIn);
router.post('/login/google', usersController.loginGoogle);
router.post('/registro',usersController.registro);


module.exports = router;