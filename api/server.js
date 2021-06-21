const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      custom: 'something went wrong in the api',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = server
