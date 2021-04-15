
class Config {
  constructor () {
    this.env = 'production'
    this.PORT = process.env.PORT || 3000
    this.API_BASE = '/api'
    this.DATABASE_HOST = 'salt.db.elephantsql.com'
    this.DATABASE = 'jezqpthi'
    this.DATABASE_USERNAME = 'jezqpthi'
    this.DATABASE_PASSWORD = 'mscM5BvL3Q8_iJSIkzd9arotFfTTtS88'
  }
}

module.exports = new Config()
