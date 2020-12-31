const knex    = require('./util')
const bcrypt  = require('bcryptjs')
const jwt     = require('jsonwebtoken')
const dotenv  = require('dotenv').config()

const tableName = 'users'

const find = async () => {
  const result = await knex(tableName).select()
  return result
}

const insert = async (data) => {
  let status  = false
  let message = ''
  
  try {
    // VALIDATIONS MISSING
    const salt = await bcrypt.genSalt(10)
    data.password = bcrypt.hashSync(data.password, salt)

    await knex(tableName)
      .insert(data)
      .then(res => {
        status = res.rowCount === 1 ? true : false
      })
      .catch(err => {
        console.error(err)
      })
  } catch (err) {
    message = err.details[0].message
    console.error(err.details[0].message)
  }
  return {status, message}
}

const login = async (data) => {
  let status  = false
  let message = ''
  let token   = ''

  const user = await knex(tableName)
    .select('id', 'username', 'password', 'first_name', 'status')
    .where('username', data.username)
    .first()
  
  if (!user) {
    status = false
    message = 'username or password is wrong!'
    return {status, message, token}
  }

  const validPass = await bcrypt.compare(data.password, user.password)
  if (validPass) {
    status  = true
    message = 'All is right!'
    token = jwt.sign({ username: user.username }, process.env.TOKEN_SECRET, { expiresIn: '16h' })
  } else {
    status  = false
    message = 'username or password is wrong!'
  }

  return { status, message, token, user: { id: user.id, username: user.username, full_name: user.full_name } }
}

exports.find    = find
exports.login   = login
exports.insert  = insert