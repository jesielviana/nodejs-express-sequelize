const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../config')

const SALT = 8

class Auth {
  constructor (user) {
    this.user = user
  }

  genToken (user) {
    const token = jwt.sign({ id: user.id }, config.JWT_SECRET, { expiresIn: '1h' })
    return token
  }

  async signin (email, password) {
    const user = await this.user.findOne({
      where: {
        email: email
      }
    })

    if (user === null) {
      throw new Error('Invalid Email or Password!')
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password)
    if (!passwordIsValid) {
      throw new Error('Invalid Email or Password!')
    }
    const token = this.genToken(user)
    const { name } = user
    return { token, userData: { name, email } }
  }

  async signup (userDTO) {
    try {
      userDTO.password = bcrypt.hashSync(userDTO.password, SALT)
      await this.user.create(userDTO)
    } catch (err) {
      throw new Error(err.message)
    }
  }
}

module.exports = Auth
