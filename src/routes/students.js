const express = require('express')
const router = express.Router()
const StudentsController = require('../controllers/students')
const db = require('../models')
const CourseModel = db.student

const studentsController = new StudentsController(CourseModel)

router.get('/', async (req, res) => {
  try {
    const students = await studentsController.get()
    res.json(students)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const { courseId, name, email } = req.body
    await studentsController.create({ name, email }, courseId)
    res.json({ name, email })
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
