const dotenv = require('dotenv').config()

const knex = require('knex')({
  client: 'pg',
  connection: process.env.NODE_ENV === 'production' ?  process.env.DATABASE_URL : process.env.DATABASE_URL,
  searchPath: ['knex', 'public'],
  pool: { min: 0, max: 7 }
});

module.exports = knex