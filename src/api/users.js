const express = require('express')
const router = express.Router()
const UserService = require('../services/users')
const { User } = require('../models')

const userService = new UserService(User)

router.get('/', async (req, res) => {
  try {
    const users = await userService.get()
    res.json(users)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const user = await userService.getById(id)
    res.send(user)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body
    await userService.create({ name, email, password })
    res.json({ name, email })
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
