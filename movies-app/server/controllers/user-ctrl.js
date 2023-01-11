const passport = require('passport')
const Usuario = require('../models/usuario-models')
const bcrypt = require('bcrypt')
require('../passport/passportLocal')(passport)


// ( +/- 20:00 )
// https://www.youtube.com/watch?v=IUw_TgRhTBE&t=1921s

// VERIFICAR ESTA PARTE DO CÓDIGO
loginSistema = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // Código não está entrando neste trecho
        if(err) throw err
        if(!user) console.log('usuário não encontrado')
        else {
            req.login(user, err => {
                if (err) throw err
                console.log('Deu certo. Será mesmo?')
                console.log(req.user)
            })
        }
    })
}

registrar = (req, res) => {
    Usuario.findOne( {email: req.body.email}, (err, isUserFound) => {
        if(err) throw err
        if(isUserFound) console.log('usuario já cadastrado no banco')
        if(!isUserFound) {
            bcrypt.hash(req.body.senha, 10, (err, hash) => {
                if(err) throw err
                else {
                    const novoUsuario = new Usuario({
                        nome: req.body.nomeCompleto,
                        documento: req.body.documento,
                        idade: req.body.idade,
                        genero: req.body.genero,
                        email: req.body.email,
                        contato: req.body.contato,
                        observacao: req.body.observacao,
                        cargo: req.body.cargo,
                        senha: hash,
                    });
                    novoUsuario.save()
                    .then(savedDoc => {
                        console.log('usuario criado')
                    })
                    .catch(err)
                }
            })
        }
    })
}//

module.exports = {
    loginSistema,
    registrar
}

// https://medium.com/@prashantramnyc/node-js-with-passport-authentication-simplified-76ca65ee91e5
// https://www.tabnine.com/code/javascript/functions/passport-local-mongoose/PassportLocalModel/register
// https://stackoverflow.com/questions/68624433/user-validation-failed-password-path-password-is-required
// https://www.youtube.com/watch?v=-RCnNyD0L-s
// https://www.geeksforgeeks.org/node-js-authentication-using-passportjs-and-passport-local-mongoose/
// register is to /register
// login is different you stupid
// console.log('A2 saved us all')
// https://www.youtube.com/watch?v=-RCnNyD0L-s&t=1324s ( 27:00 )
// https://www.youtube.com/watch?v=IUPHbf9cw74 ( +/- 20:00 )

/*
VERSÃO FALHA DA IMPLEMENTAÇÃO DE SEGURANÇA DO PASSPORT-LOCAL-MONGOOSE

// Tem vídeo na udemy da Dr. Yu
loginSistema = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err) { throw err}
        if(!user) res.send('Fuck you, no user!')
        else {
            req.login(user, (err) => {
                if(err) throw err
                res.send('FINALLY, IDK WHY BUT YEAH BABY')
                console.log(req.user)
            })
        }
    })(req, res, next)
}

// Esse método é para estar correto
registrar = (req, res) => {
    const novoUsuario = new Usuario({
        nome: req.body.nomeCompleto,
        documento: req.body.documento,
        idade: req.body.idade,
        genero: req.body.genero,
        email: req.body.email,
        contato: req.body.contato,
        observacao: req.body.observacao,
        cargo: req.body.cargo,
        senha: req.body.senha,
        // username: req.body.email
    });

    Usuario.register({username: req.body.email}, req.body.senha, (err, user) => {
        if(err) { console.log(err) }
        else {
            novoUsuario.save().then((element, err) => {
                console.log('usuario salvo com sucesso')
            })
            passport.authenticate("local")(req, res, function(){
                console.log('Entrou na autenticação do REGISTRAR')
            });
        }
    })
}

*/