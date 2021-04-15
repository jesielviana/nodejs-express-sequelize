const config = require('./index')

module.exports = {
  dialect: 'postgres',
  username: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE,
  host: config.DATABASE_HOST
}
