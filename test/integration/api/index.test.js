/* global describe test expect */
const request = require('supertest')
const config = require('../../../src/config')
const app = require('../../../src/app')

describe('Test the API base path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get(config.API_BASE)
    expect(response.statusCode).toBe(200)
  })
})
