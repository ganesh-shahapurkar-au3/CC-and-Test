const express = require('express')
const app = express();
const controllers = require('./database/controllers')
const cors = require('cors')
const bodyParser = require('body-parser');
const data = require('./data')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get('/', async (req, res) => {
    // const getData = await data.getJsonData()
    console.log("loaded")
    const result = await controllers.readData()
    console.log("getError", result)
    res.json(result[0].related_talks)
})

app.post('/addData', async (req, res) => {

    let result = {}
    try {
        const tedData = await data.getJsonData()
        const validDatails = await controllers.addData(tedData)

        if (validDatails) {
            // console.log("data", req.body)
            console.log(" Added Successfully")
            result.success = true;
        } else {
            console.log(" Details not valid")
            result.success = false;
        }
    }

    catch (err) {
        result.success = false;
        console.log("err", err)
    }

    finally {
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
})

app.listen(5000, () => {
    console.log("server running on port 5000")
})

let str = "['children', 'creativity', 'culture', 'dance', 'education', 'parenting', 'teaching']"

let res = str.split(' ')

let a = str.replace(/'/g, '"');
a = JSON.parse(a);

console.log(a)

