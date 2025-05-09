const express = require('express')
const cors = require('cors')
const mongo = require('./mongo')

const server = express()

server.use(cors())

server.get('/', (req, res) => {
  res.json('Hello Express')
})

var port  = 3001

server.listen(port, () => {
  console.log("Server is running in 3001");  
  mongo.connect()
});