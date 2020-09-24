
const Product = require('../models/Product')
const {formatPrice} = require('../../lib/utils')
const File = require('../models/File')

module.exports = {
    loginForm(req,res){
        return res.render('session/index')
    },
    logout(req,res){
        req.session.destroy()
        return res.redirect('/')
    },
}