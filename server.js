const app     = require('./app')
const dotenv  = require('dotenv')
const http    = require('http')

dotenv.config()

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port: ${PORT}`)
})
