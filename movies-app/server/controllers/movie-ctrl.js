const Movie = require('../models/movie-models');
const Paciente = require('../models/paciente-models');

getAllPacientes = async (req, res) => {
    await Paciente.find({}, (err, paciente) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!paciente.length) {
            return res
                .status(200)
                .json({ success: false, error: `Não há pacientes cadastrados!` })
        }
        // Aqui fornece os dados para o front end
        // Corrigir o retorno de todas as informações ao invés do necessário
        return res
            .status(200)
            .json({ success: true, data: paciente })
    }).clone().catch(err => console.log(err))
}

createPaciente = (req, res) => {
    const novoPaciente = new Paciente({
        nome: req.body.nomeCompleto,
        nascimento: req.body.dataNascimento,
        NomeDaMae: req.body.nomeMae,
        CPF: req.body.docCpf,
        CartaoSUS: req.body.susCard
    });
    // console.log("Paciente: " + novoPaciente)
    
    if (!novoPaciente) {
        return res.status(400).json({
            success: false,
            error: 'Algo deu errado ao obter dados do formulário...',
        })
    }

    const paciente = new Paciente(novoPaciente)

    if (!paciente) {
        return res.status(400).json({ success: false, error: err })
    }
    
    Paciente.findOne({
        CPF: req.body.doCCpf // req.body.docCpf
    }, function (err, foundPacient) {
        if(foundPacient) {
            return res.status(400).json({
                success: false, 
                message: 'Paciente já cadastrado no sistema!'
            })
        } else {
            paciente.save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: novoPaciente._id,
                    message: 'Paciente cadastrado com sucesso!',
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'Paciente não foi cadastrado!',
                })
            })
        }
    })
}

deletePaciente = async (req, res) => {
    await Paciente.findOneAndDelete({ _id: req.params.id }, (err, paciente) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!paciente) {
            return res
                .status(404)
                .json({ success: false, error: `Paciente não encontrado` })
        }

        return res.status(200).json({ success: true, data: paciente })
    }).catch(err => console.log(err))
}



// Testes
createMovie = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const movie = new Movie(body)

    if (!movie) {
        return res.status(400).json({ success: false, error: err })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
}

updateMovie = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        movie.name = body.name
        movie.time = body.time
        movie.rating = body.rating
        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            })
    })
}

deleteMovie = async (req, res) => {
    await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getMovieById = async (req, res) => {
    await Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getMovies = async (req, res) => {
    await Movie.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById,
    getAllPacientes,
    createPaciente,
    deletePaciente
}