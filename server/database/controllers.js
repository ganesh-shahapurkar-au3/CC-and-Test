const { loanModel } = require('./config')

async function readData() {
    try {
        const results = await loanModel.findAll()
        console.log("data Loaded successfully");
        return results
    }
    catch (err) {
        console.log(err)
    }

}

async function viewUser(id) {
    try {
        const results = await loanModel.findByPk(id)
        console.log("data Loaded successfully");
        return results
    }
    catch (err) {
        console.log(err)
    }

}

module.exports = { readData, viewUser }