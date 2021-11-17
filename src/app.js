const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('./api')
const compression = require('compression')
const config = require('./config')
const auth = require('./middleware/auth')

const app = express()

app.use(compression())
app.use(
  cors({
    origin: config.CLIENT_URL,
    // credentials: true, // token in cookie
    methods: 'GET,PUT,POST,OPTIONS, DELETE',
    allowedHeaders: 'Accept, Content-Type, Authorization'
  })
) // https://github.com/expressjs/cors
app.use(helmet()) // https://helmetjs.github.io/
app.use(express.json())

app.all(`${config.API_BASE}*`, (req, res, next) => {
  const publicRoutes = config.PUBLIC_ROUTES
  for (let i = 0; i < publicRoutes.length; i += 1) {
    if (req.path === publicRoutes[i]) {
      return next()
    }
  }
  auth(req, res, next)
})

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center">App Online, 2021!</h1>')
})
app.use(config.API_BASE, routes)

module.exports = app
