/* global beforeAll afterAll describe test expect */
const request = require('supertest')
const config = require('../../../src/config')
const app = require('../../../src/app')
const { sequelize } = require('../../../src/models')
const { signin } = require('../../helpers')

const API_COURSES = `${config.API_BASE}/courses`

const DEFAULT_COURSE = {
  name: 'Course 1',
  ch: 1500
}
let USER_TOKEN = ''
beforeAll(async () => {
  USER_TOKEN = await signin()
  await request(app).post(API_COURSES)
    .set('Cookie', USER_TOKEN)
    .send(DEFAULT_COURSE)
})

afterAll(async () => {
  await sequelize.close()
})

describe('Test the courses path', () => {
  test('It should add new course', async () => {
    const newCourse = {
      name: 'Course 2',
      ch: 3020
    }
    const response = await request(app)
      .post(API_COURSES).send(newCourse)
      .set('Cookie', USER_TOKEN)
    expect(response.statusCode).toBe(201)
  })

  test('It should get all courses', async () => {
    const response = await request(app)
      .get(API_COURSES)
      .set('Cookie', USER_TOKEN)
    const courses = response.body
    expect(response.statusCode).toBe(200)
    expect(courses.length).toBe(2)
  })
})
