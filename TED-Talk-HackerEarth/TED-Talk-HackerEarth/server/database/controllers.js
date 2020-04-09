const { dataModel } = require('./config')

async function readData() {
    try {
        const results = await dataModel.findAll()
        console.log("data Loaded successfully");
        return results.splice(0, 5)
    }
    catch (err) {
        console.log(err)
    }

}

async function addData(data) {
    try {
        await dataModel.bulkCreate(data)
        console.log('data added on database')
        return true
    }
    catch (e) {
        console.log("err", e)
        return false;
    }
}

module.exports = { readData, addData }