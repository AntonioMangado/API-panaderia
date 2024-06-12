const router = require('express').Router()
const usersControllers = require('../controllers/users.controllers')

/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *      - Users
 *    description: Creates an user
 *    parameters:
 *      - in: body
 *        name: user
 *        schema:
 *          type: object
 *          properties:
 *            username:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *        required: true
 *        description: Data for user creation
 *    responses:
 *      200:
 *        description: User created
 */
router.post('/users', usersControllers.createUser)

/**
 * @swagger
 * /users/login:
 *  post:
 *    tags:
 *      - Users
 *    description: User logs in and generates an access token
 *    parameters:
 *      - in: body
 *        name: user
 *        schema:
 *          type: object
 *          properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 *        required: true
 *        description: Example login credentials
 *    responses:
 *      200:
 *        description: User logged in
 */
router.post('/users/login', usersControllers.loginUser)

module.exports = router;