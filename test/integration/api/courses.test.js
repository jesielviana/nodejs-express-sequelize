/* global beforeAll afterAll describe test expect */
const request = require('supertest')
const config = require('../../../src/config')
const app = require('../../../src/app')
const { sequelize } = require('../../../src/models')

const API_COURSES = `${config.API_BASE}/courses`

const DEFAULT_COURSE = {
  name: 'Course one',
  ch: 1500
}

beforeAll(async () => {
  await sequelize.sync({ force: true })
  await request(app).post(API_COURSES).send(DEFAULT_COURSE)
})

afterAll(async () => {
  await sequelize.close()
})

describe('Test the courses path', () => {
  test('It should add new course', async () => {
    const newCourse = {
      name: 'Course 1',
      ch: 3020
    }
    const response = await request(app).post(API_COURSES).send(newCourse)
    expect(response.statusCode).toBe(201)
  })

  test('It should get all courses', async () => {
    const response = await request(app).get(API_COURSES)
    const courses = response.body
    expect(response.statusCode).toBe(201)
    expect(courses.length).toBe(2)
  })
})
