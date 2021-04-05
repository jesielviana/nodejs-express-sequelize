const config = require('./index')

module.exports = {
  dialect: 'postgres',
  username: 'postgres',
  password: '',
  database: config.DATABASE
}
