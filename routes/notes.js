const router          = require('express').Router()
const notesController = require('../controllers/notes')
const { isLogged }    = require('../middlewares/auth')

router.post('/',    isLogged, notesController.postNote)
router.get('/',     isLogged, notesController.getNotes)
router.get('/:id',  isLogged, notesController.getNotesByUserId)

module.exports = router