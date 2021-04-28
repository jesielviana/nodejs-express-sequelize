const express = require('express')
const router = express.Router()
const CourseService = require('../services/courses')
const { Course } = require('../models')

const courseService = new CourseService(Course)

router.get('/', async (req, res) => {
  console.log('User: ', req.userId)
  try {
    const courses = await courseService.get()
    res.json(courses)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  console.log('User: ', req.userId)
  const {
    params: { id }
  } = req
  try {
    const course = await courseService.getById(id)
    res.send(course)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/', async (req, res) => {
  console.log('User: ', req.userId)
  try {
    const { name, ch } = req.body
    await courseService.create({ name, ch })
    res.status(201).json({ name, ch })
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
