import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from '../components/navbar/NavBar'
import MainPage from '../pages/inicio/mainPage'
import { MoviesList, MoviesInsert, MoviesUpdate, ListaPacientes, Agenda, Login} from '../pages'
import Recepcionista from '../pages/recepcionista/Recepcionista'
import PatchNote from '../pages/patchnote/PatchNote'
import Cadastro from '../pages/cadastro/Cadastro'

import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/patch-notes" element={<PatchNote/>} />
                <Route path="/recepcionista" element={<Recepcionista/>} />
                <Route path="/lista-pacientes" element={<ListaPacientes/>} />
                <Route path="/agenda" element={<Agenda/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/movies/list"  element={<MoviesList/>} />
                <Route path="/movies/create"  element={<MoviesInsert/>} />
                <Route path="/movies/update/:id" element={<MoviesUpdate/>} />
            </Routes>
        </Router>
    )
}

export default App;