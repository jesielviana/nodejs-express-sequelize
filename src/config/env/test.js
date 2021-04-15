class Config {
  constructor () {
    this.env = 'test'
    this.PORT = process.env.PORT || 3000
    this.API_BASE = '/api'
    this.DATABASE_HOST = 'salt.db.elephantsql.com'
    this.DATABASE = 'jezqpthi'
    this.DATABASE_USERNAME = 'jezqpthi'
    this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
  }
}

module.exports = new Config()
