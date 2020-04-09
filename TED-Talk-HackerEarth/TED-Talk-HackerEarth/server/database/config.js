const Sequelize = require('sequelize')
const Ted = require('./models')



const db = new Sequelize('lending_club', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
})


db.authenticate()
    // db.sync(
    //     { force: true }
    // )
    .then(() => console.log('Connection has been established successfully.'))
    .catch(() => console.log('Unable to connect to the database:', err))

//////////////// ---------- database config ---------- /////////////// 

const dataModel = Ted(db, Sequelize)

module.exports = { dataModel }
console.log("connect")