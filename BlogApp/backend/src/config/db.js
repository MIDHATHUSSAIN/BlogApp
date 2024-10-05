const Sequelize = require('sequelize')
const sequelize = new Sequelize('userdata', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });

  module.exports = sequelize