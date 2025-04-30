const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.send('Hello Express!')
})

var port  = 3001

server.listen(port);