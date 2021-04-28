const express = require('express')
const router = express.Router()
const AuthService = require('../services/auth')
const config = require('../config')
const { User } = require('../models')

const authService = new AuthService(User)

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const { token, userData } = await authService.login(email, password)
    // res.cookie('token', token, { maxAge: 3600000, httpOnly: true, secure: config.COOKIE_SECURE }) // // token in cookie
    // res.json({ auth: true, user: userData }) // // token in cookie
    res.json({ auth: true, user: userData, token: token })
  } catch (err) {
    res.status(401).send({ auth: false, token: null, message: err.message })
  }
})

router.post('/logout', (req, res) => {
  res.cookie('token', '-', { maxAge: 0, httpOnly: true, secure: config.COOKIE_SECURE })
  return res.status(200).send()
})

module.exports = router
