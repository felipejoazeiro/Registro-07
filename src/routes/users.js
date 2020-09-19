const express = require('express')
const routes = express.Router()
const UserController = require('../app/controllers/UserController')
const Validator = require('../app/validators/user')
/*

//Login / Logout

routes.get('/login', SessionController.loginForm)
routes.post('/login', SessionController.login)
routes.post('/logout', SessionController.logout)

//reset password / forgot
routes.get('/forgot-password', SessionController.forgotForm)
routes.get('/password-reset', SessionController.resetForm)
routes.post('/forgot-password', SessionController.forgot)
routes.post('/password-reset', SessionController.reset)


routes.delete('/', UserController.delete)
*/

//user register
routes.get('/register', UserController.registerForm)
routes.post('/register', Validator.post , UserController.post)
routes.get('/',Validator.show ,UserController.show)
routes.put('/', UserController.update)


module.exports = routes