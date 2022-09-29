import React from "react";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";

// CSS Local
import styles from './recepcionista.module.css';
import Container from "react-bootstrap/esm/Container";

// COMPONENTES

function Recepcionista() {

    return (
        <React.Fragment>
            <prontuario-recepcionista>
                <form action="/cadastrar" method="post">
                    <Container fluid>
                        <Row>
                            <h2 className={styles.pageTitle} style={{color: '#fff', padding: '1rem'}}>Preencha os dados do paciente:</h2>
                            <div class="col-12">
                                <div class="form-floating mb-3">
                                    <input type="text" name="nomecompleto" class="form-control" id="floatingInput" placeholder="nome"
                                        autocomplete="off" required />
                                    <label for="floatingInput">Nome completo:</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-3 col-sm-6">
                                <div class="form-floating mb-3">
                                    <input type="text" name="datanascimento" class="form-control date" id="floatingInput"
                                        placeholder="data nascimento" autocomplete="off" required />
                                    <label for="floatingInput">Data de nascimento:</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-3 col-sm-6">
                                <div class="form-floating mb-3">
                                    <input type="text" name="momname" class="form-control" id="floatingInput" placeholder="mae"
                                        autocomplete="off" required />
                                    <label for="floatingInput">Nome da mãe:</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-3 col-sm-6">
                                <div class="form-floating mb-3">
                                    <input type="text" name="doccpf" class="form-control cpf" id="floatingInput" placeholder="cpf"
                                        autocomplete="off" required />
                                    <label for="floatingInput">CPF:</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-3 col-sm-6">
                                <div class="form-floating mb-3">
                                    <input type="text" name="suscard" class="form-control" id="floatingInput" placeholder="cartao sus"
                                        autocomplete="off" required />
                                    <label for="floatingInput">Cartão SUS:</label>
                                </div>
                            </div>
                        </Row>
                        <Button size="lg" type='submit'>Cadastrar</Button>
                    </Container>
                </form>
            </prontuario-recepcionista>
        </React.Fragment>
    )
}

export default Recepcionista;