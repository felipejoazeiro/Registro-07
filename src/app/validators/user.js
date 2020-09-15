const User = require('../models/User')

async function post(req,res,next){
    // verificar se tem todos os campos
    const keys = Object.keys(req.body)
    for(key of keys){
        if(req.body[key] == ""){
            return res.render('user/register',{
                user: req.body,
                error: 'Por favor preencha todos os campos'
            })
        }
    }
    //verificar se o usuário existe [email, cpf_cnpj]
    let {email,cpf_cnpj,password, passwordRepeat} = req.body

    cpf_cnpj = cpf_cnpj.replace(/\D/g, "")
    const user = await User.findOne({
        where: {email},
        or: {cpf_cnpj} 
    })

    if(user) return res.render('user/register',{
        user: req.body,
        error: 'Usuário já cadastrado'
    })
    //verificar se a senha condizem
    if(password != passwordRepeat) return res.render('user/register',{
        user: req.body,
        error: 'Senha incorreta'
    })
    next()
}
module.exports = {
    post
}