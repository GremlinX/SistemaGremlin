import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/esm/Button';

// CSS Local
import styles from './listapacientes.module.css';

// COMPONENTES
import BarraPesquisa from '../../components/barrapesquisa/BarraPesquisa'

// Axios
import api from "../../api"; //Configurar exemplo depois neste arquivo
// import axios from "axios";

function ListaPacientes(){

    const [pacientes, setPacientes] = useState([]);

    useEffect( async () => {
        await api.getAllPacientes()
        .then(res => {
            window.alert("Deu certo!" + res)
        })
        .catch(err => {
            window.alert(err)
        })
    },[])

    return(
        <prontuario-lista-paciente>
        <h1 className={styles.pageTitle}><i className="far fa-list-alt"></i> LISTA DE PACIENTES</h1>
            <Container fluid>
                    <BarraPesquisa
                        type='search'
                        name='searchPacient'
                        placeholder='Encontrar paciente'
                    />
            </Container>
            {/* A partir daqui já podemos separar em um component
            Talvez reaproveitar do projeto 'my-app' */}
            <Container fluid>
                <Row>
                    <div className="table-responsive">
                        <table className="table table-striped table-dark align-middle">
                            <thead>
                                <tr>
                                    <th scope="col table-custom">ID</th>
                                    <th scope="col table-custom">NOME</th>
                                    <th scope="col">DATA DE NASCIMENTO</th>
                                    <th scope="col">NOME DA MÃE</th>
                                    <th scope="col">CPF</th>
                                    <th scope="col">CARTÃO SUS</th>
                                    {/* <th scope="col">DATA DE ENTRADA</th> */}
                                    <th scope="col">OPÇÃO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row"></th>
                                <td name="nome"></td>
                                <td className='date' name="idade"></td>
                                <td name='nomeDaMae'></td>
                                <td className='cpf'></td>
                                <td></td>
                                <td>
                                    <Button size="sm" variant='outline-warning'><i className="fas fa-edit"></i></Button>
                                    <Button size="sm" variant='outline-danger'><i className="fas fa-trash"></i></Button>
                                </td>
                                {/* <td><%=newPatient.createdAt%></td> */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Row>
            </Container>
        </prontuario-lista-paciente>
    )
}

export default ListaPacientes;