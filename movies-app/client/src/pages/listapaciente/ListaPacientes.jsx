import React, { useEffect, useState } from "react";

//Bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/esm/Row';
// import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form'
import Spinner from 'react-bootstrap/Spinner';

// CSS Local
import styles from './listapacientes.module.css';

// COMPONENTES
import ModalBox from '../../components/modal/Modal';

// Axios
import api from "../../api";

function ListaPacientes(){

    const [loading, setLoading] = useState(false);
    const [pacientes, setPacientes] = useState([]);
    const [filteredResults, setFilteredResults] = useState('');
    const [confirmModal, setConfirmModal] = useState({ isOpen: false, idx: '', nomePaciente: ''});
    
    
    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try {
                const {data: response} = await api.getAllPacientes()
                // console.log(response.data)
                setPacientes(response.data)
                setFilteredResults(response.data)
            } catch (error){
                console.error(error.message)
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const handleSearch = (event) => {
        setFilteredResults(event.currentTarget.value)
        if(event.currentTarget.value === '') {
            setFilteredResults(pacientes)
            return ;
        }
        const pacientesFiltrados = pacientes.filter((query) => 
            (query.nome).toLowerCase().indexOf((event.currentTarget.value).toLowerCase()) !== -1
        );
        setFilteredResults(pacientesFiltrados); 
    };
    
    const deletePaciente = async(id) => {
        console.log('Exlcuindo paciente: '+ id)
        // e.preventDefault();
        setLoading(true);
        api.deletePacienteById(id)
        window.location.reload()
        setLoading(false);
        setConfirmModal({isOpen: false, idx: ''});
    }

    return (
        <prontuario-lista-paciente>
            <ModalBox open={confirmModal} close={setConfirmModal} onDelete={deletePaciente}/>

            {loading && (
                <prontuario-lista-paciente-carregando>
                    <Spinner variant="light" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <div className={styles.carregandoInformacoes}>Carregando as informações...</div>
                </prontuario-lista-paciente-carregando>
            )} 

            {!loading && (
                <prontuario-lista-paciente-visualizacao>
                    <h1 className={styles.pageTitle}><i className="far fa-list-alt"></i> LISTA DE PACIENTES</h1>
                    <Container fluid>
                        <Form.Control className='mb-3' 
                            name="text" type="text" 
                            onChange={handleSearch} placeholder='Pesquisar'
                            autoComplete="off"    
                        />
                        <Row>
                            <div className="table-responsive">
                                <table className="table table-striped table-dark align-middle">
                                    <thead>
                                        <tr>
                                            {/* <th scope="col table-custom">ID</th> */}
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
                                    {filteredResults && filteredResults.map((element, index) => 
                                        <tr key={element._id}>
                                            {/* <th scope="row">{element._id}</th> */}
                                            <td name="nome">{element.nome}</td>
                                            <td className='date' name="idade">{element.nascimento}</td>
                                            <td name='nomeDaMae'>{element.NomeDaMae}</td>
                                            <td className='cpf'>{element.CPF}</td>
                                            <td>{element.CartaoSUS}</td>
                                            <td>
                                                <div className={styles.btnAcoes}>
                                                    <Button size="sm" variant='outline-warning'><i className="fas fa-edit"></i></Button>
                                                    <Button 
                                                        id={element._id} 
                                                        name={element.nome} 
                                                        size="sm" 
                                                        variant='outline-danger' 
                                                        onClick={() => setConfirmModal({isOpen: true, idx: element._id, nomePaciente: element.nome})}>
                                                        <i className="fas fa-trash"></i>
                                                    </Button>
                                                </div>
                                            </td>
                                            {/* <td>{element.createdAt}</td> */}
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </Row>
                    </Container>
                </prontuario-lista-paciente-visualizacao>
            )}
        </prontuario-lista-paciente>
    )
}

export default ListaPacientes;