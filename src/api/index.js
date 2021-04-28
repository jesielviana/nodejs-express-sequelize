const express = require('express')
const router = express.Router()
const coursesRoutes = require('./courses')
const studentsRoutes = require('./students')
const authRoutes = require('./auth')
const usersRoutes = require('./users')

router.use('/auth', authRoutes)
router.use('/users', usersRoutes)
router.use('/courses', coursesRoutes)
router.use('/students', studentsRoutes)

module.exports = router
