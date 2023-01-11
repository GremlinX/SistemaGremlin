import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from "react-bootstrap/esm/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from "react-bootstrap/esm/Button"

// CSS Local
import styles from './cadastrar.module.css'

// Axios
import api from "../../api";

function Cadastro(){

    const initialState = {
        nomeCompleto: '',
        documento: '',
        idade: '',
        genero: '',
        email: '',
        contato: '',
        observacao: '',
        cargo: '',
        senha: '',
        confirmaSenha: ''
    }
    const [usuario, setUsuario] = useState(initialState);
    const handleInputChange = event => {
        const { name, value } = event.target
        setUsuario({ ...usuario, [name]: value})
    }

    const [validated, setValidated] = useState(false);
    
    function handleSubmit(e){
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } 
        setValidated(true);
        if(form.checkValidity() !== false){
            if(usuario.senha !== usuario.confirmaSenha) {
                window.alert("Senhas incompatíveis!")
            } else {
                async function cadastraUsuario() {
                    await api.registrar(usuario)
                    .then(res => {
                        window.alert("Deu certo!")
                    })
                    .catch(error => {
                        window.alert(error)
                    })
                }
                cadastraUsuario()
            }
        }
    }

    return (
        <prontuario-cadastro>
            <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                <Container fluid>
                    <Row>
                        <h1 className={styles.title}><i className="fas fa-user-plus"></i> Cadastrar Usuário</h1>
                        <h3 className={styles.title}>INFORMAÇÕES</h3>
                        <Form.Group as={Col} xs="12" controlId="validationCustom01">
                            <FloatingLabel
                                controlId="floatingInput01"
                                label="Nome Completo:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    onChange={handleInputChange}
                                    value={usuario.nomeCompleto}
                                    type="text" 
                                    name="nomeCompleto" 
                                    placeholder="nomeCompleto"
                                    autoComplete="off" 
                                    required={true}
                                />
                                <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Preenchimento obrigatório!
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} xs="12" md="6" sm="6" controlId="validationCustom02">
                            <FloatingLabel
                                controlId="floatingInput02"
                                label="Documento:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    onChange={handleInputChange}
                                    value={usuario.documento}
                                    type="text" 
                                    name="documento" 
                                    placeholder="documento"
                                    autoComplete="off" 
                                    required={true}
                                />
                                <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                Preenchimento obrigatório!
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} xs="12" md="6" sm="6" controlId="validationCustom03">
                            <FloatingLabel
                                controlId="floatingInput03"
                                label="Idade:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    onChange={handleInputChange}
                                    value={usuario.idade}
                                    type="text" 
                                    name="idade" 
                                    placeholder="idade"
                                    autoComplete="off" 
                                    required={true}
                                />
                                <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                Preenchimento obrigatório!
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} xs="12" md="6" sm="6" controlId="validationCustom04">
                            <FloatingLabel
                                controlId="floatingInput04"
                                label="Gênero:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    onChange={handleInputChange}
                                    value={usuario.genero}
                                    type="text" 
                                    name="genero" 
                                    placeholder="genero"
                                    autoComplete="off"
                                    required={true}
                                />
                                <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} xs="12" md="6" sm="6" controlId="validationCustom05">
                            <FloatingLabel
                                controlId="floatingInput05"
                                label="Email:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    onChange={handleInputChange}
                                    value={usuario.email}
                                    type="text" 
                                    name="email" 
                                    placeholder="email"
                                    autoComplete="off"
                                    required={true}
                                />
                                <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Preenchimento obrigatório!
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} xs="12" md="6" sm="6" controlId="validationCustom06">
                            <FloatingLabel
                                controlId="floatingInput06"
                                label="Contato:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    onChange={handleInputChange}
                                    value={usuario.contato}
                                    type="text" 
                                    name="contato" 
                                    placeholder="contato"
                                    autoComplete="off"
                                    required={true}
                                />
                                <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Preenchimento obrigatório!
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} xs="12" controlId="validationCustom07">
                            <FloatingLabel
                                controlId="floatingInput07"
                                label="Observação:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    onChange={handleInputChange}
                                    value={usuario.observacao}
                                    type="text" 
                                    name="observacao" 
                                    placeholder="observacao"
                                    autoComplete="off"
                                    required={true}
                                />
                                <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <h3 className={styles.title}>CARGO</h3>

                        <Form.Group as={Col} xs="12" controlId="validationCustom08">
                            <FloatingLabel
                                controlId="floatingInput08"
                                label="Cargo:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    onChange={handleInputChange}
                                    value={usuario.cargo}
                                    type="text" 
                                    name="cargo" 
                                    placeholder="cargo"
                                    autoComplete="off"
                                    required={true}
                                />
                                <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Preenchimento obrigatório!
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} xs="12" md="6" sm="6" controlId="validationCustom09">
                            <FloatingLabel
                                controlId="floatingInput09"
                                label="Senha:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    onChange={handleInputChange}
                                    value={usuario.senha}
                                    type="password" 
                                    name="senha" 
                                    placeholder="senha"
                                    autoComplete="off"
                                    required={true}
                                />
                                <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Preenchimento obrigatório!
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        
                        <Form.Group as={Col} xs="12" md="6" sm="6" controlId="validationCustom10">
                            <FloatingLabel
                                controlId="floatingInput10"
                                label="Confirmar Senha:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    onChange={handleInputChange}
                                    value={usuario.confirmaSenha}
                                    type="password" 
                                    name="confirmaSenha" 
                                    placeholder="confirmaSenha"
                                    autoComplete="off"
                                    required={true}
                                />
                                <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Preenchimento obrigatório!
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                </Container>
                <Button size="lg" type="submit" className={styles.btnCadastrar}>Cadastrar Usuário</Button>
            </Form>
        </prontuario-cadastro>
    )
}

export default Cadastro;