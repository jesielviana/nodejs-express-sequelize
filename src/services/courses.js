class CourseService {
  constructor (Course) {
    this.Course = Course
  }

  async get () {
    try {
      return await this.Course.findAll({
        attributes: ['id', 'name', 'ch']
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async getById (id) {
    try {
      return await this.Course.findByPk(id, {
        include: { association: 'students' }
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async create (courseDTO) {
    try {
      await this.verifyIfCourseNameIsRegistered(courseDTO.name)
      await this.Course.create(courseDTO)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async verifyIfCourseNameIsRegistered (courseName) {
    const existingCourse = await this.Course.findAll({
      where: {
        name: courseName
      }
    })
    if (existingCourse.length > 0) {
      throw new Error('Course already registered')
    }
  }
}

module.exports = CourseService
