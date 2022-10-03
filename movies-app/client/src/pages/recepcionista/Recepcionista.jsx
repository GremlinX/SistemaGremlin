import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from "react-bootstrap/esm/Button";

// CSS Local
import styles from './recepcionista.module.css';

// COMPONENTES

// Axios
import api, { insertPaciente } from "../../api"; //Configurar exemplo depois neste arquivo
import Col from "react-bootstrap/esm/Col";

function Recepcionista() {

    const initialState = {
        nomeCompleto: '',
        dataNascimento: '',
        nomeMae: '',
        docCpf: '',
        susCard: ''
    }
    const [paciente, setPaciente] = useState(initialState);

    const handleInputChange = event => {
        const { name, value } = event.target
        setPaciente({ ...paciente, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(paciente); // Verificar o motivo de estar retornando vazio.
        async function postPaciente(){
            await api.insertPaciente(paciente)
            .then(res => {
                window.alert("Deu certo!")
            })
            .catch(error => {
                window.alert(error)
            })
        }
        postPaciente()
    }

    return (
        <React.Fragment>
            <prontuario-recepcionista>
                <form onSubmit={handleSubmit}>
                    <Container fluid>
                        <Row>
                            <h2 className={styles.pageTitle} style={{color: '#fff', padding: '1rem'}}>Preencha os dados do paciente: </h2>
                            <Col xs='12'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Nome:"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                        onChange={handleInputChange}
                                        value={paciente.nomeCompleto}
                                        type="text" 
                                        name="nomeCompleto" 
                                        placeholder="nome"
                                        autoComplete="off" 
                                        required={true}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col xs='12' md='3' sm='6'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Data de nascimento:"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        onChange={handleInputChange}
                                        value={paciente.dataNascimento}
                                        type="text" 
                                        name="dataNascimento" 
                                        className="date" 
                                        placeholder="data nascimento" 
                                        autoComplete="off" 
                                        required={true}
                                    ></Form.Control>
                                </FloatingLabel>
                            </Col>
                            <Col xs='12' md='3' sm='6'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Nome da mãe:"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        onChange={handleInputChange}
                                        value={paciente.nomeMae}
                                        type="text" 
                                        name="nomeMae" 
                                        placeholder="mae"
                                        autoComplete="off" 
                                        required 
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col xs='12' md='3' sm='6'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="CPF:"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                        onChange={handleInputChange}
                                        value={paciente.docCpf}
                                        type="text" 
                                        name="docCpf" 
                                        className="cpf" 
                                        placeholder="cpf"
                                        autoComplete="off" 
                                        required={true} 
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col xs='12' md='3' sm='6'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Cartão SUS:"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        onChange={handleInputChange}
                                        value={paciente.susCard}
                                        type="text" 
                                        name="susCard" 
                                        placeholder="cartao sus"
                                        autoComplete="off" 
                                        required={true}  
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Button size="lg" type="submit">Cadastrar</Button>
                    </Container>
                </form>
            </prontuario-recepcionista>
        </React.Fragment>
    )
}

export default Recepcionista;