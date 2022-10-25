const port = 3003

const express = require('express')
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})