const express = require('express')
const router = express.Router()
const coursesRoutes = require('./courses')
const studentsRoutes = require('./students')

router.get('/', function (req, res) {
  res.end('App Online!')
})

router.use('/courses', coursesRoutes)

router.use('/students', studentsRoutes)

module.exports = router
