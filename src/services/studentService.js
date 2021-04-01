class StudentService {
  constructor(Student) {
    this.Student = Student
  }

  async get () {
    try {
      return await this.Student.findAll({
        attributes: ['id', 'name', 'email', 'courseId']
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async create (studentDTO, courseId) {
    try {
      studentDTO.courseId = courseId
      await this.Student.create(studentDTO)
    } catch (err) {
      console.log('ERROR:: ', err.message)
      throw new Error(err.message)
    }
  }
}

module.exports = StudentService
