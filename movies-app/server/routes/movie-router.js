const express = require('express')

const MovieCtrl = require('../controllers/movie-ctrl')

const router = express.Router()

//Lista Pacientes
router.get('/lista', MovieCtrl.getAllPacientes)
router.delete('/lista-pacientes/:id', MovieCtrl.deletePaciente)

// Recepcionista
router.get('/recepcionista')
router.post('/recepcionista/cadastrar', MovieCtrl.createPaciente)

// Testes
router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

module.exports = router