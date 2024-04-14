const signUp = require('./../models/signUpModel')

exports.signUpUser = async (req, res) => {

    const newUser = await signUp.create({
        name: req.body.username,
        password: req.body.password
    })
    console.log(newUser)
}