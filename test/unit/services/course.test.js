/* global jest beforeAll test expect */
const CourseService = require('../../../src/services/courses')
jest.mock('../../../src/models')
const { Course } = require('../../../src/models')

let courseService
beforeAll(() => {
  courseService = new CourseService(Course)
})

test('should fetch all courses', async () => {
  const courses = [{ id: 1, name: 'ADS', ch: 3000 }, { id: 2, name: 'info', ch: 2000 }]
  Course.findAll.mockResolvedValue(courses)
  const resp = await courseService.get()
  expect(resp).toEqual(courses)
})
