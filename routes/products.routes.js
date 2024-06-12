const router = require('express').Router()
const productsControllers = require('../controllers/products.controllers')
const verifyToken = require('../middleware/verifyToken')

/**
 * @swagger
 * /products:
 *  get:
 *    tags:
 *      - Products
 *    description: Gets all products
 *    parameters:
 *      - in: header
 *        name: Authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: Bearer token for authentication
 *    responses:
 *      200:
 *        description: Products retrieved
 */
router.get('/products', verifyToken, productsControllers.getAllProducts)

/**
 * @swagger
 * /products:
 *  post:
 *    tags:
 *      - Products
 *    description: Creates a new product
 *    parameters:
 *      - in: header
 *        name: Authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: Bearer token for authentication
 *    responses:
 *      200:
 *        description: Created product
 */
router.post('/products', verifyToken, productsControllers.createProduct)

/**
 * @swagger
 * /products/{id}:
 *  get:
 *    tags:
 *      - Products
 *    description: Gets a single product by ID
 *    parameters:
 *      - in: header
 *        name: Authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: Bearer token for authentication
 *      - name: id
 *        in: path
 *        description: ID of the product
 *        required: true
 *    responses:
 *      200:
 *        description: Created product
 */
router.get('/products/:id', verifyToken, productsControllers.getProductById)

/**
 * @swagger
 * /products/{id}:
 *  put:
 *    tags:
 *      - Products
 *    description: Updates a single product by ID
 *    parameters:
 *      - in: header
 *        name: Authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: Bearer token for authentication
 *      - name: id
 *        in: path
 *        description: ID of the product
 *        required: true
 *    responses:
 *      200:
 *        description: Product updated
 */
router.put('/products/:id', verifyToken, productsControllers.updateProduct)

/**
 * @swagger
 * /products/{id}:
 *  delete:
 *    tags:
 *      - Products
 *    description: Deletes a single product by ID
 *    parameters:
 *      - in: header
 *        name: Authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: Bearer token for authentication
 *      - name: id
 *        in: path
 *        description: ID of the product
 *        required: true
 *    responses:
 *      200:
 *        description: Product deleted
 */
router.delete('/products/:id', verifyToken, productsControllers.deleteProduct)

module.exports = router;