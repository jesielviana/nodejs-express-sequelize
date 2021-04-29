/* global describe test expect */
const request = require('supertest')
const app = require('../../../src/app')

describe('Test the API base path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})
