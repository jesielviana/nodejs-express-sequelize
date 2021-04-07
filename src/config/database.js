const config = require('./index')

module.exports = {
  dialect: 'postgres',
  username: config.DATABASE_USERNAME,
  password: '',
  database: config.DATABASE
}
