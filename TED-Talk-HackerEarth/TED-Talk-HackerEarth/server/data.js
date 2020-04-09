const csvTOjson = require('csvtojson')
const fs = require('fs')

function getJsonData() {
    const data = csvTOjson().fromFile('./TED-22kData.csv').then(source => {
        let jsonD = JSON.stringify(source)
        // fs.writeFileSync('./jsond', jsonD)
        return source
    })
    return data
}
module.exports = { getJsonData }
