const usersModel = require('../models/users')

const login = async (req, res, next) => {
  if (!req.body) {
    res
      .status(400)
      .json({error: true, message: 'Bad request'})
  }

  const result = await usersModel.login(req.body);
  res
    .status(201)
    .header('auth-token', result.token)
    .json(result);
}

exports.login = login