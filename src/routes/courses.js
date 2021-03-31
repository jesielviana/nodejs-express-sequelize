const express = require('express')
const router = express.Router()
const CoursesController = require('../controllers/courses')
const db = require('../models')
const CourseModel = db.course

const coursesController = new CoursesController(CourseModel)

router.get('/', async (req, res) => {
  try {
    const courses = await coursesController.get()
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
    const user = await coursesController.getById(id)
    res.send(user)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, ch } = req.body
    await coursesController.create({ name, ch })
    res.json({ name, ch })
  } catch (err) {
    res.status(400).send(err.message)
  }
}
)

module.exports = router
