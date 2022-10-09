import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getAllPacientes = () => api.get(`/lista`)
export const insertPaciente = payload => api.post(`/recepcionista/cadastrar`, payload)
export const deletePacienteById = id => api.delete(`/lista-pacientes/${id}`)

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    getAllPacientes,
    insertPaciente,
    deletePacienteById,

    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis