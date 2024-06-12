const router = require('express').Router()
const usersControllers = require('../controllers/users.controllers')

/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *      - Users
 *    description: Creates an user
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
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string 
 *    responses:
 *      200:
 *        description: User logged in
 */
router.post('/users/login', usersControllers.loginUser)

module.exports = router;