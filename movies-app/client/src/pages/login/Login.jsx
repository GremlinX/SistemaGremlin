import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Local CSS
import styles from './login.module.css'

// Axios
import api from "../../api";

function Login(){

    const initialState = {
        email: '',
        senha: ''
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
        if(form.checkValidity() !== false) {
            async function logarUsuario(){
                await api.loginSistema(usuario)
                .then(res => {
                    console.log(res)
                    window.alert("Usuário logado com sucesso!")
                })
                .catch(error => {
                    window.alert(error)
                })
            }
            logarUsuario()
        }
    }

    return (
        <prontuario-login>
            <Container fluid>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className={styles.customLabel}>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleInputChange}
                                    value={usuario.email} size="lg" placeholder="Insira seu email!" required={true}/>
                            <Form.Control.Feedback type="invalid">
                                Preenchimento obrigatório!
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className={styles.customLabel}>Senha</Form.Label>
                        <Form.Control type="password" name="senha" onChange={handleInputChange}
                                    value={usuario.senha} size="lg" placeholder="Insira sua senha!"
                                    autoComplete="false" required={true}/>
                        <Form.Control.Feedback type="invalid">
                                Preenchimento obrigatório!
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" size="lg">Entrar</Button>
                </Form>
            </Container>
            {/* <iframe width="1920" height="1080" 
                src="https://www.youtube.com/embed/xqQg0uBWH3w" 
                title="鬼頭明里×監督「キミとフィットボクシング」スペシャル対談　第４回" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe> */}
        </prontuario-login>
    )
}

export default Login;