const express = require('express')
const router = express.Router()
const { signUpUser, loginUser } = require('../controllers/authenticationCtrl')

router.post('/signup', signUpUser)

router.post('/login', loginUser)

module.exports = router 