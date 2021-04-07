class Config {
  constructor () {
    this.env = 'development'
    this.PORT = process.env.PORT || 3000
    this.API_BASE = '/api'
    this.DATABASE = 'school_dev'
    this.DATABASE_USERNAME = 'postgres'
  }
}

module.exports = new Config()
