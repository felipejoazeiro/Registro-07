const express = require('express')
const routes = express.Router()
const UserController = require('../app/controllers/UserController')
const SessionController = require('../app/controllers/SessionController')
const Validator = require('../app/validators/user')
/*

//Login / Logout

routes.post('/login', SessionController.login)

//reset password / forgot
routes.get('/forgot-password', SessionController.forgotForm)
routes.get('/password-reset', SessionController.resetForm)
routes.post('/forgot-password', SessionController.forgot)
routes.post('/password-reset', SessionController.reset)


routes.delete('/', UserController.delete)
*/
routes.get('/login', SessionController.loginForm)
routes.post('/logout', SessionController.logout)

//user register
routes.get('/register', UserController.registerForm)
routes.post('/register', Validator.post , UserController.post)
routes.get('/',Validator.show ,UserController.show)
routes.put('/', Validator.update,UserController.update)


module.exports = routes