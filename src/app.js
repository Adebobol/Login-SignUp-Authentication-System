const express = require('express')
const dotenv = require('dotenv')
const signUpRouter = require('./routes/signUpRoutes')
const signUp = require('./models/signUpModel')
const mongoose = require('mongoose')


dotenv.config({ path: './.env' })
const PORT = process.env.PORT || 2000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
mongoose.connect("mongodb://127.0.0.1/login-signup-authentication-system", {

}).then(() => console.log('Database connected'))


// USE EJS IN THE VIEW ENGINE
app.set('view engine', 'ejs')

// static file
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})
app.use('/', signUpRouter)
// app.post('/signup', async (req, res) => {
//     const user = {
//         name: req.body.username,
//         password: req.body.password
//     }
//     const newUser = await signUp.insertMany(user)
//     console.log(newUser)
// })
// app.get('/login', (req, res) => {
//     res.render('login')
// })

app.listen(PORT, () => {
    console.log("Server is running")
})