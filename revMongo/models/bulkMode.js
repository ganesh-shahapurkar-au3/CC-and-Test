const mongoose = require("mongoose")


const dataSchema = mongoose.Schema({

    description: {
        type: String,
    },
    event: {
        type: String,
    },
    main_speaker: {
        type: String,
    },
    name: {
        type: String,
    },
    published_date: {
        type: Number,
    },
    ratings: {
        type: Array

    },
    related_talks: {
        type: Array
    },
    tags: {
        type: Array
    },
    title: {
        type: String,
    },
    url: {
        type: String,
    },
    views: {
        type: Number,
    }

})



module.exports = mongoose.model('newData', dataSchema)