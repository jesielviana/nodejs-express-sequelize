const dbConfig = require('./database')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig)

module.exports = sequelize
