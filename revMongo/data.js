const csvTOjson = require('csvtojson')
const fs = require('fs')
const dataSchema = require('./models/bulkMode')

function getJsonData() {
    const data = csvTOjson().fromFile('./TED-22kData.csv').then(source => {
        let jsonD = JSON.stringify(source)
        fs.writeFileSync('./json.json', jsonD)
        console.log(jsonD)
        return source
    })
    return data
}

let data = fs.readFileSync(__dirname + '/data.json', 'utf-8');
async function loadMeetings() {
    // data = (data)
    try {
        await dataSchema.insertMany(data);
        console.log('Done!');
        process.exit();
    } catch (e) {
        console.log(e);
        process.exit();
    }
};

module.exports = { getJsonData, loadMeetings }



