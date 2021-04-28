const bcrypt = require('bcryptjs')

const SALT = 8
class StudentService {
  constructor (Student) {
    this.student = Student
  }

  async get () {
    try {
      return await this.student.findAll({
        attributes: ['id', 'name', 'email', 'courseId']
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async getById (id) {
    try {
      return await this.student.findByPk(id, {
        attributes: ['id', 'name', 'email'],
        include: { association: 'course' }
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async create (studentDTO, courseId) {
    try {
      studentDTO.courseId = courseId
      studentDTO.password = bcrypt.hashSync(studentDTO.password, SALT)
      await this.student.create(studentDTO)
    } catch (err) {
      console.log('ERROR:: ', err.message)
      throw new Error(err.message)
    }
  }
}

module.exports = StudentService
