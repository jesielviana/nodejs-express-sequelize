const db = require('./models')
const express = require('express')
const routes = require('./routes')
const compression = require('compression')

const app = express()
const PORT = process.env.PORT || 3000

app.use(compression())
app.use(express.json())

app.use('/', routes)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
})
