const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const userController = require('./controllers/userController')
const expanseController = require('./controllers/expanseController')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get('/', async (req, res) => {
    try {
        var result = await userController.readUsersData()
        console.log(result)
        res.send(result)
    }
    catch (err) {
        console.log("error" + err)
    }
})

app.post('/adduser', async (req, res) => {

    let result = {}
    try {
        const data = req.body;
        console.log("userdata" + data)
        const addUser = await userController.adduser(data)

        if (addUser) {
            result.success = true
            console.log("User Added Successfully")
        } else {
            result.success = false
            console.log("adding user falied")
        }
    }
    catch (err) {
        result.success = false
        console.log("error", err)
    }
    finally {
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
})

app.post('/login', async (req, res) => {
    let result = {}
    try {
        const data = req.body
        const loggedIN = await userController.verifyLogin(data)
        if (!loggedIN) {
            console.log("wrong credintial")
            result.success = false
        } else {
            console.log("correct")
            result.success = true
            result.user = loggedIN.dataValues
        }
    }
    catch (err) {
        console.log("error", err)
        result.success = false
    }
    finally {
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
})

app.post('/addExpanse', async (req, res) => {

    let result = {}
    try {
        const data = req.body;
        console.log("Expansedata" + data)
        const addUser = await expanseController.addExpanse(data)

        if (addUser) {
            result.success = true
            console.log("Expanse Added Successfully")
        } else {
            result.success = false
            console.log("adding expanses falied")
        }
    }
    catch (err) {
        result.success = false
        console.log("error", err)
    }
    finally {
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
});


app.get('/getExpanse', async (req, res) => {
    try {
        var result = await expanseController.getExpanse()
        console.log(result)
        res.send(result)
    }
    catch (err) {
        console.log("error" + err)
    }
})


const PORT = 8000
app.listen(PORT, () => console.log('server running on port ' + PORT))