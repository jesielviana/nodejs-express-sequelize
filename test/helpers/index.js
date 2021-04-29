const bcrypt = require('bcryptjs')
const request = require('supertest')
const config = require('../../src/config')
const app = require('../../src/app')
const { sequelize } = require('../../src/models')
const SALT = 8

const API_SIGNUP = `${config.API_BASE}/auth/signup`
const API_SIGNIN = `${config.API_BASE}/auth/signin`

const USER_TEST = {
  name: 'User test',
  email: 'user@test.com',
  password: bcrypt.hashSync('12345678', SALT)
}

async function startDatabase () {
  await sequelize.sync({ force: true })
}

async function signup () {
  await startDatabase()
  await request(app).post(API_SIGNUP).send(USER_TEST)
}

async function signin () {
  await signup()
  const response = await request(app).post(API_SIGNIN).send(USER_TEST)
  return response.body.token
}

const helper = {
  USER_TEST,
  signin,
}

module.exports = helper



