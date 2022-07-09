const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '.db/app.db'
})

module.exports = sequelize
//sequelize e so para relacionais e postman