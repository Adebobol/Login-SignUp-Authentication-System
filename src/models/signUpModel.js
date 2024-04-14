const mongoose = require('mongoose')


const signUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


const signUp = mongoose.model('signUp', signUpSchema)

module.exports = signUp