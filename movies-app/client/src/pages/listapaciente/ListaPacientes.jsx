import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/esm/Button';
import Spinner from 'react-bootstrap/Spinner';

// CSS Local
import styles from './listapacientes.module.css';

// COMPONENTES
import BarraPesquisa from '../../components/barrapesquisa/BarraPesquisa'

// Axios
import api, { getAllPacientes } from "../../api"; //Configurar exemplo depois neste arquivo

function ListaPacientes(){

    const [loading, setLoading] = useState(false);
    const [pacientes, setPacientes] = useState([]);

    // https://dev.to/darkmavis1980/fetching-data-with-react-hooks-and-axios-114h
    
    // componentDidMount = async () => {
    //     this.setState({ isLoading: true })

    //     await api.getAllMovies().then(movies => {
    //         this.setState({
    //             movies: movies.data.data,
    //             isLoading: false,
    //         })
    //     })
    // }

    // useEffect(() => {
    //     const fetchData = async () =>{
    //       setLoading(true);
    //       try {
    //         const {data: response} = await axios.get('/stuff/to/fetch');
    //         setData(response);
    //       } catch (error) {
    //         console.error(error.message);
    //       }
    //       setLoading(false);
    //     }
    
    //     fetchData();
    //   }, []);

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try {
                const {data: response} = await api.getAllPacientes()
                // console.log(response.data)
                setPacientes(response.data)
            } catch (error){
                console.error(error.message)
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    return(
        <prontuario-lista-paciente>
            {loading && (
                <prontuario-lista-paciente-carregando>
                    <Spinner variant="light" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <div className={styles.carregandoInformacoes}>Carregando as informações...</div>
                </prontuario-lista-paciente-carregando>
            )}
            {!loading && (
                <React.Fragment>
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
                                    {pacientes.map((element, index) => 
                                        <tr>
                                            <th scope="row"></th>
                                            <td name="nome">{pacientes && pacientes[0].name}</td>
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
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </Row>
                    </Container>
                </React.Fragment>
            )}
        </prontuario-lista-paciente>
    )
}

export default ListaPacientes;