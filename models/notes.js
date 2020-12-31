const knex    = require('./util')

const tableName = 'notes'

const find = async () => {
  const result = await knex(tableName).select()
  return result
}

const findByUserId = async (user_id) => {
  const result = await knex(tableName).where('id', user_id).select()
  return result
}

const insert = async (data) => {
  let status  = false
  let message = ''
  
  try {
    // VALIDATIONS MISSING
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

exports.find          = find
exports.findByUserId  = findByUserId
exports.insert        = insert
