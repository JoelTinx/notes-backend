const router          = require('express').Router()
const usersController = require('../controllers/users')
const { isLogged }    = require('../middlewares/auth')

router.post('/',  usersController.postUser)
router.get('/',   isLogged, usersController.getUsers)

module.exports = router