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
      await this.Course.create(courseDTO)
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }
  }
}

module.exports = CourseService
