const { sequelize } = require('./models')
const express = require('express')
const routes = require('./api')
const compression = require('compression')

const app = express()
const PORT = process.env.PORT || 3000

app.use(compression())
app.use(express.json())

app.use('/', routes)

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
})
