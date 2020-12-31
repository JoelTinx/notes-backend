const notesModel = require('../models/notes')

const getNotesByUserId = async (req, res, next) => {
  const id = req.params.id
  const notes = await notesModel.findByUserId(id)
  res
  .status(200)
  .json(notes)
}

const getNotes = async (req, res, next) => {
  const notes = await notesModel.find()
  res
  .status(200)
  .json(notes)
}

const postNote = async (req, res, next) => {
  if (!req.body) {
    res
      .status(400)
      .json({error: true, message: 'Bad request'})
  }

  const result = await notesModel.insert(req.body)
  res
    .status(201)
    .json(result)
}

exports.getNotes          = getNotes
exports.getNotesByUserId  = getNotesByUserId
exports.postNote          = postNote