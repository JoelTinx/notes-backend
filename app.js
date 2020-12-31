const express     = require('express')
const cors        = require('cors')
const bodyParser  = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({message: 'Hello UTP'})
})

app.use('/login',     require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/users', require('./routes/users'))

module.exports = app
