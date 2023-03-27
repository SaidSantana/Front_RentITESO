const router = require('express').Router();
const ControladorEspacios = require('./../controllers/espacios');

/**
 * @swagger
 * /espacios:
 *   get:
 *     description: Obtiene los detalles de todos los espacios y los lista
 *     responses:
 *       200:
 *         description: Espacios encontrados
 *       404:
 *         description: Espacio no encontrado
 */

router.get('', ControladorEspacios.listar);

/**
 * @swagger
 * /espacios/{id}:
 *  get:
 *   description: obtiene un espacio por su id
 *   parameters:
 *     - in: path
 *       name: id
 *       description: id del espacio para obtenerlo
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: Espacio encontrado
 *     400:
 *       description: Espacio no encontrado
 */

router.get('/:id', ControladorEspacios.consultarId);

//router.get('/:nombre', Controladorespacios.consultarNombre);

/**
 * @swagger
 * /espacios:
 *   post:
 *     description: Crea un espacio nuevo para guardar en la base de datos
 *     responses:
 *       200:
 *         description: Espacio creado y se muestra
 *       404:
 *         description: Espacio no creado
 */

router.post('', ControladorEspacios.postEspacio);

/**
 * @swagger
 * /espacios/{id}:
 *  put:
 *   description: actualiza la informacion de un espacio mediante su id
 *   parameters:
 *     - in: path
 *       name: id
 *       description: id del espacio para encontrarlo
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: Espacio actualizado
 *     400:
 *       description: Espacio no actualizado
 */

router.put('/:id', ControladorEspacios.putEspacio);

/**
 * @swagger
 * /espacios/{id}:
 *  delete:
 *   description: elimina un espacio mediante su id
 *   parameters:
 *     - in: path
 *       name: id
 *       description: id del espacio para eliminarlo
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: Espacio eliminado
 *     400:
 *       description: Espacio no eliminado
 */

router.delete('/:id', ControladorEspacios.deleteEspacio);

module.exports = router;