const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

// Middlewares
signUpSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return

    this.password = await bcrypt.hash(this.password, 12)
    next()
})



const signUp = mongoose.model('signUp', signUpSchema)

module.exports = signUp