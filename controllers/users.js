const usersModel = require('../models/users')

const getUsers = async (req, res, next) => {
  const result = await usersModel.find()

  res
  .status(200)
  .json(result)
}

const postUser = async (req, res, next) => {
  if (!req.body) {
    res
      .status(400)
      .json({error: true, message: 'Bad request'})
  }

  const result = await usersModel.insert(req.body)
  res
    .status(201)
    .json(result)
}

exports.postUser = postUser
exports.getUsers = getUsers