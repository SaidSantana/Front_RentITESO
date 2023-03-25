const router = require('express').Router();
const ControladorEquipos = require('./../controllers/equipos');

/**
 * @swagger
 * /equipos:
 *   get:
 *     description: Obtiene los detalles de todos los equipos y los lista
 *     responses:
 *       200:
 *         description: Equipos encontrados
 *       404:
 *         description: Producto no encontrado
 */

router.get('', ControladorEquipos.listar);

/**
 * @swagger
 * /equipos/{id}:
 *  get:
 *   description: obtiene un equipo por su id
 *   parameters:
 *     - in: path
 *       name: id
 *       description: id del equipo para obtenerlo
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: equipo encontrado
 *     400:
 *       description: Equipo no encontrado
 */

router.get('/:id', ControladorEquipos.consultarId);

//router.get('/:nombre', ControladorEquipos.consultarNombre);

/**
 * @swagger
 * /equipos:
 *   post:
 *     description: Crea un equipo nuevo para guardar en la base de datos
 *     responses:
 *       200:
 *         description: Equipo creado y se muestra
 *       404:
 *         description: Equipo no creado
 */

router.post('', ControladorEquipos.postEquipo);

/**
 * @swagger
 * /equipos/{id}:
 *  put:
 *   description: actualiza la informacion de un equipo mediante su id
 *   parameters:
 *     - in: path
 *       name: id
 *       description: id del equipo para encontrarlo
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: equipo actualizado
 *     400:
 *       description: Equipo no actualizado
 */

router.put('/:id', ControladorEquipos.putEquipo);

/**
 * @swagger
 * /equipos/{id}:
 *  delete:
 *   description: elimina un equipo mediante su id
 *   parameters:
 *     - in: path
 *       name: id
 *       description: id del equipo para eliminarlo
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: equipo eliminado
 *     400:
 *       description: Equipo no eliminado
 */

router.delete('/:id', ControladorEquipos.deleteEquipo);

module.exports = router;