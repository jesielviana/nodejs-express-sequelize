const bcrypt = require('bcryptjs')

const SALT = 8
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

  async create (userDTO) {
    try {
      userDTO.password = bcrypt.hashSync(userDTO.password, SALT)
      await this.user.create(userDTO)
    } catch (err) {
      console.log('ERROR:: ', err.message)
      throw new Error(err.message)
    }
  }
}

module.exports = UserService
