class Config {
  constructor () {
    this.env = 'test'
    this.PORT = process.env.PORT || 3000
    this.API_BASE = '/api'
    this.DATABASE_HOST = process.env.DATABASE_HOST || 'localhost'
    this.DATABASE_PORT = process.env.DATABASE_PORT || 5432
    this.DATABASE = process.env.DATABASE || 'school_test'
    this.DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'postgres'
    this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || ''
  }
}

module.exports = new Config()
