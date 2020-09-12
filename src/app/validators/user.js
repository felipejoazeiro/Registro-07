const User = require('../models/User')

async function post(req,res,next){
    // verificar se tem todos os campos
    const keys = Object.keys(req.body)
    for(key of keys){
        if(req.body[key] == ""){
            return res.send('Please,fill all fields')
        }
    }
    //verificar se o usuário existe [email, cpf_cnpj]
    let {email,cpf_cnpj,password, passwordReapeat} = req.body

    cpf_cnpj = cpf_cnpj.replace(/\D/g, "")
    const user = await User.findOne({
        where: {email},
        or: {cpf_cnpj} 
    })

    if(user) return res.send('User exists')
    //verificar se a senha condizem
    if(password != passwordReapeat) return res.send('Password Mismatch')

    next()
}
module.exports = {
    post
}