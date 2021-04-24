class CourseService {
  constructor (Course) {
    this.course = Course
  }

  async get () {
    try {
      return await this.course.findAll({
        attributes: ['id', 'name', 'ch']
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async getById (id) {
    try {
      return await this.course.findByPk(id, {
        include: { association: 'students' }
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async create (courseDTO) {
    try {
      await this.verifyIfCourseNameIsRegistered(courseDTO.name)
      await this.course.create(courseDTO)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async verifyIfCourseNameIsRegistered (courseName) {
    const existingCourse = await this.course.findOne({
      where: {
        name: courseName
      }
    })
    if (existingCourse) {
      throw new Error('Course already registered')
    }
  }
}

module.exports = CourseService
