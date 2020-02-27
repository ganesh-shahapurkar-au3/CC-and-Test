const express = require('express')
const app = express();
const controller = require('./database/controllers')
const cors = require('cors')

app.use(cors())

app.get('/', async (req, res) => {
    const result = await controller.readData()
    res.send(result)
})

app.get('/data/:id', async (req, res) => {
    const id = req.params.id
    const result = await controller.viewUser(id)
    res.send(result)
})

app.listen(5000, () => {
    console.log("server running on port 5000")
})

