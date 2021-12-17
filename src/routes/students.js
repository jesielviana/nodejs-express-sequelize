const express = require('express')
const router = express.Router()
const StudentService = require('../services/students')
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

router.get('/:id', async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const student = await studentService.getById(id)
    res.send(student)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const { courseId, name, email, password } = req.body
    await studentService.create({ name, email, password }, courseId)
    res.json({ name, email })
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
