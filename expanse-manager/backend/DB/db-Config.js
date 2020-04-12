const Sequelize = require('sequelize')
const users = require('../models/userModel')
const expanseM = require('../models/expanseModel')

const db = new Sequelize('banks', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

db.authenticate()
db.sync(
    // { force: true }
)
    .then(() => console.log('Connection has been established successfully.'))
    .catch((err) => console.log('Unable to connect to the database:', err))

const User = users(db, Sequelize)
const Expanse = expanseM(db, Sequelize)



module.exports = { User, Expanse }