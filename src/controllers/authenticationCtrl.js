const signUp = require('../models/signUpModel')
const bcrypt = require('bcrypt')


// cont token = (id) => {

// }


exports.signUpUser = async (req, res) => {

    const newUser = await signUp.create({
        name: req.body.username,
        password: req.body.password
    })
    res.redirect('login')
}



exports.loginUser = async (req, res, next) => {

    // const newUser = {
    //     name: req.body.username,
    //     password: req.body.password
    // }
    const { username, password } = req.body

    if (!username || !password) {
        return res.send('Provide a username and password.')
    }

    const currentUser = await signUp.findOne({ name: username }).select('password')
    const pass = await currentUser.comparePassword(password, currentUser.password)
    if (!currentUser || !pass) {
        return res.send('User cannot be found')
    }
    res.render('home')
}

