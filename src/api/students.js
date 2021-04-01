const express = require('express')
const router = express.Router()
const StudentService = require('../services/studentService')
const { Student } = require('../models')

const studentService = new StudentService(Student)

router.get('/', async (req, res) => {
  try {
    const students = await studentService.get()
    res.json(students)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const { courseId, name, email } = req.body
    await studentService.create({ name, email }, courseId)
    res.json({ name, email })
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
