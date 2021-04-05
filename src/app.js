const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('./api')
const compression = require('compression')
const config = require('./config')

const app = express()

app.use(compression())
app.use(cors()) // https://github.com/expressjs/cors
app.use(helmet()) // https://helmetjs.github.io/
app.use(express.json())
app.use(config.API_BASE, routes)

module.exports = app
