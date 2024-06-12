const router = require('express').Router()
const productsControllers = require('../controllers/products.controllers')

router.get('/products', productsControllers.getAllProducts)
router.post('/products', productsControllers.createProduct)
router.get('/products/:id', productsControllers.getProductById)
router.put('/products/:id', productsControllers.updateProduct)
router.delete('/products/:id', productsControllers.deleteProduct)

module.exports = router;