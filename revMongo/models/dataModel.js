const mongoose = require("mongoose")


const StudentsSchema = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    hometown: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    }
})

module.exports = mongoose.model('students', StudentsSchema)