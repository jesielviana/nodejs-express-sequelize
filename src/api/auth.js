const express = require('express')
const router = express.Router()
const AuthService = require('../services/auth')
const { User } = require('../models')

const authService = new AuthService(User)

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body
    const { token, userData } = await authService.signin(email, password)
    res.json({ auth: true, user: userData, token: token })
  } catch (err) {
    res.status(401).send({ auth: false, token: null, message: err.message })
  }
})

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body
    await authService.signup({ name, email, password })
    res.json({ name, email })
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
