class UserService {
  constructor (User) {
    this.user = User
  }

  async get () {
    try {
      return await this.user.findAll({
        attributes: ['id', 'name', 'email']
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  async getById (id) {
    try {
      return await this.user.findByPk(id, {
        attributes: ['id', 'name', 'email']
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports = UserService
