const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail) {

    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        if(user == null) {
            return done(null, false, { message: 'no suer with that email' })
        }

        try {
            if(await bcrypt.compare(password, user.password)){
                return done(null, user)
            } else {
                return done(null, false, { message: 'password incorrect'} )
            }
        } catch(e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy( {usernameField: 'email'}, 
    authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize


// const Usuario = require('../models/usuario-models')
// const bcrypt = require('bcrypt')
// const LocalStrategy = require('passport-local').Strategy
// const passport = require('passport')
// module.exports = function(passport) {
//     passport.use(new LocalStrategy((username, password, done) => {
//         Usuario.findOne({email: username}, (err, isFoundUser) => {
//             if(err) { throw err }
//             if(!isFoundUser) { return done(null, false)}
//             bcrypt.compare(password, isFoundUser.senha, (err, result) => {
//                 if(err) throw err
//                 if(result) return done(null, user)
//                 else return done(null, false)
//             })
//         })
//     }))

//     passport.serializeUser((user, callback) => {
//         callback(null, user.id)
//     })
//     passport.deserializeUser((id, callback) => {
//         Usuario.findOne({_id: id}, (err, isFoundUser) => {
//             callback(err, isFoundUser)
//         })
//     })
// }