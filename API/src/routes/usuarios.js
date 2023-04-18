const router = require('express').Router();
const usersController = require('./../controllers/usuarios');

/**
 * @swagger
 * /users:
 *  get:
 *    description: Get the full users list
 *    responses:
 *      200:
 *        description: Success getting the users list
 *      400:
 *        description: Error obtaining the users list
 */
router.get('',usersController.getUsers);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *   description: Get the user by its id
 *   parameters:
 *     - in: path
 *       name: id
 *       description: Id of the user to get
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: User obtained successfully
 *     400:
 *       description: Error obtaining the user
 */
router.get('/:id',usersController.getUser);

/**
 * @swagger
 * /users:
 *  post:
 *    description: Create a new user on the database
 *    parameters: 
 *      - in: body
 *        name: user
 *        description: User to create
 *        schema:
 *          type: Object
 *          required: 
 *            - nombre
 *            - apellido
 *            - email
 *            - rol
 *            - image
 *            - date
 *          properties:
 *            nombre:
 *              type: string
 *            apellido:
 *              type: string
 *            email:
 *              type: string
 *            image: 
 *              type: string
 *            date:
 *              type: date
 *    responses:
 *      200: 
 *        description: User created successfully
 *      400: 
 *        description: Bad request
 */
router.post('',usersController.createUser);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    description: Delete a user with an id
 *    parameters:
 *      - in: path
 *        name: id
 *        description: User id to delete
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: User deleted successfully
 *      400:
 *        description: Bad request
 */
router.delete('/:id', usersController.deleteUser);

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    description: Update a user with an id
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Id of the user to update
 *        schema: 
 *          type: string
 *      - in: body
 *        name: New user
 *        schema:
 *          type: Object
 *          required:
 *            - nombre
 *            - apellido
 *            - image
 *          properties:
 *            nombre:
 *              type: string
 *            apellido:
 *              type: string
 *            image:
 *              type: string
 *    responses:
 *      200: 
 *        description: User updated successfully
 *      400:
 *        description: Bad request
 *      
 */
router.put('/:id', usersController.updateUser);

module.exports = router;