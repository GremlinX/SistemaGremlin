//tudo foi copiaod de https://www.youtube.com/watch?v=-RCnNyD0L-s&t=1236s
require('dotenv').config();
const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser')
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('./db/index');
const movieRouter = require('./routes/movie-router');

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Access port 8000')
})

// ******************** INICIO DOS TESTES - AUTH ********************

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);

const initializePassport = require('./passport/passportLocal');
const usuarioModels = require('./models/usuario-models');
initializePassport(
  passport, 
  email => usuarioModels.find(user.email === email),
  id => usuarioModels.find(user.id === id)
  
)

// ******************** FIM DOS TESTES - AUTH ********************

app.use('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))