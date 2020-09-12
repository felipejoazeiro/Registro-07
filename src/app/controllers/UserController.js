const User = require('../models/User')
module.exports = {
    registerForm(req,res){
        return res.render("user/register.njk")
    },
    async post(req,res){
        return res.send('Passed')
    }
}