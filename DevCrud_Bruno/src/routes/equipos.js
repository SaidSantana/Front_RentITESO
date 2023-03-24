const router = require('express').Router();
const ControladorEquipos = require('./../controllers/equipos');

router.get('', ControladorEquipos.listar);

router.get('/:id', ControladorEquipos.consultarId);

router.post('', ControladorEquipos.postEquipo);

router.put('/:id', ControladorEquipos.putEquipo);

router.delete('/:id', ControladorEquipos.deleteEquipo);

module.exports = router;