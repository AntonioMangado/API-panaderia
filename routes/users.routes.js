const router = require('express').Router()
const usersControllers = require('../controllers/users.controllers')

router.post('/users', usersControllers.createUser)
router.post('/users/login', usersControllers.loginUser)

module.exports = router;