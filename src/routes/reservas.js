const router = require('express').Router();
const ControladorReservas = require('./../controllers/reservas');

router.get('/:id', ControladorReservas.consultarId);

router.post('', ControladorReservas.postReserva);

router.delete('/:id', ControladorReservas.deleteReserva);

module.exports = router;