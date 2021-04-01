/* global jest beforeAll test expect */
const StudentService = require('../../../src/services/students')
jest.mock('../../../src/models')
const { Student } = require('../../../src/models')

let studentService
beforeAll(() => {
  studentService = new StudentService(Student)
})

test('should fetch all students', async () => {
  const students = [{ id: 1, name: 'Aluno 1', email: 'aluno1@email.com' }, { id: 2, name: 'Aluno 2', email: 'aluno2@email.com' }]
  Student.findAll.mockResolvedValue(students)
  const resp = await studentService.get()
  expect(resp).toEqual(students)
})
