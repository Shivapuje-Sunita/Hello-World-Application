const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    message: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Alien',alienSchema)