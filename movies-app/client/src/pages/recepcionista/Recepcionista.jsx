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

    const [validated, setValidated] = useState(false);
    
    function handleSubmit(e){
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);

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
                <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                    <Container fluid>
                        <Row>
                            <h2 className={styles.pageTitle} style={{color: '#fff', padding: '1rem'}}>Preencha os dados do paciente: </h2>
                            <Form.Group as={Col} xs="12" controlId="validationCustom01">
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
                                    <Form.Control.Feedback>Nome válido!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Insira uma nome válido!
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} xs='12' md='3' sm='6' controlId="validationCustom02">
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
                                    <Form.Control.Feedback>Data válida!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Insira uma data válida!
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} xs='12' md='3' sm='6' controlId="validationCustom03">
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
                                    <Form.Control.Feedback>Nome válido!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Insira um nome válido!
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} xs='12' md='3' sm='6' controlId="validationCustom04">
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
                                    <Form.Control.Feedback>CPF válido!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Insira um CPF válido!
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} xs='12' md='3' sm='6' controlId="validationCustom05">
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
                                    <Form.Control.Feedback>Numeração válida!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Numeração do cartão inválido.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Button size="lg" type="submit">Cadastrar</Button>
                    </Container>
                </Form>
            </prontuario-recepcionista>
        </React.Fragment>
    )
}

export default Recepcionista;