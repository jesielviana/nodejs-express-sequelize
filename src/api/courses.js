const express = require('express')
const router = express.Router()
const CourseService = require('../services/courseService')
const { Course } = require('../models')

const courseService = new CourseService(Course)

router.get('/', async (req, res) => {
  try {
    const courses = await courseService.get()
    res.json(courses)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const user = await courseService.getById(id)
    res.send(user)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, ch } = req.body
    await courseService.create({ name, ch })
    res.json({ name, ch })
  } catch (err) {
    res.status(400).send(err.message)
  }
}
)

module.exports = router
