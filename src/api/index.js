const express = require('express')
const router = express.Router()
const coursesRoutes = require('./courses')
const studentsRoutes = require('./students')

router.get('/', function (req, res) {
  res.status(200).send('<h1 style="text-align: center">App Online!</h1>')
})

router.use('/courses', coursesRoutes)

router.use('/students', studentsRoutes)

module.exports = router
