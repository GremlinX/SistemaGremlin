const express = require('express')
const MovieCtrl = require('../controllers/movie-ctrl')
const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()


// Lista Pacientes
router.get('/lista', MovieCtrl.getAllPacientes)
router.delete('/lista-pacientes/:id', MovieCtrl.deletePaciente)

// Recepcionista
router.get('/recepcionista') // Nem precisa 
router.post('/recepcionista/cadastrar', MovieCtrl.createPaciente)

// Agenda
router.get('/agenda');

// Cadastrar
router.get('/cadastro'); // Nem precisa 
router.post('/cadastro/cadastrar', UserCtrl.registrar)

// Login
router.get('/login'); // Nem precisa 
router.post('/login/usuario', UserCtrl.loginSistema)

// Testes
router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

module.exports = router