const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const Students = require('./models/dataModel')
const fun = require('./data')



//////////////// connect to db ///////////////
mongoose.connect("mongodb://localhost:27017/mylib", { useUnifiedTopology: true }, function (err, client) {
    if (err)
        throw err;
    console.log("connected to db")
})

//////////////// connect to db ///////////////

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/////////////// ROUTES /////////////////

app.get('/', async (req, res) => {
    // fun.getJsonData()
    fun.loadMeetings()
    const students = await Students.find();
    try {
        res.json(students)
    }
    catch (err) {
        console.log('error')
        res.json(err)
    }

})



app.post('/', async (req, res) => {
    console.log(req.body)

    const students = new Students(req.body
        // firstname: req.body.firstname, lastname: req.body.lastname, hometown: req.body.hometown, username: req.body.username, password: req.body.password, gender: req.body.gender
    )
    try {
        const saveData = await students.save()
        res.json(saveData)
    }
    catch (err) {
        console.log('error')
        res.json({ message: err })
    }
})




/////////////// ROUTES /////////////////


app.listen(5000, function () {
    console.log("server running on 5000")
});
