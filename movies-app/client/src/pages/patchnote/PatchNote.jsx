import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ListGroup from 'react-bootstrap/ListGroup';

function PatchNote(){

    return (
        <React.Fragment>
            <prontuario-patch-note style={{color: 'white'}}>
                <Container fluid>
                    <Row className="mb-3">
                        <ListGroup as='ol' numbered>
                            <h2>28/09/22</h2>
                            <ListGroup.Item>Criado a tela de recepcionista sem funcionalidade.</ListGroup.Item>
                            <ListGroup.Item>Ajusta carregamento de dados do banco na tela /lista-pacientes.</ListGroup.Item>
                            <ListGroup.Item>Adiciona patch notes ao sistema.</ListGroup.Item>
                        </ListGroup>
                    </Row>
                    <Row className="mb-3">
                        <ListGroup as='ol' numbered>
                            <h2>02/10/22</h2>
                            <ListGroup.Item>Possível cadastrar um paciente em /recepcionista.</ListGroup.Item>
                        </ListGroup>
                    </Row>
                    <Row className="mb-3">
                        <ListGroup as='ol' numbered>
                            <h2>09/10/22</h2>
                            <ListGroup.Item>Craido filtro de pesquisa por nome do paciente na tela /lista-pacientes.</ListGroup.Item>
                            <ListGroup.Item>Criado modal de confirmação de exclusão de paciente na tela /lista-pacientes.</ListGroup.Item>
                            <ListGroup.Item>Criado validação de dados nos campos da tela /recepcionista.</ListGroup.Item>
                        </ListGroup>
                    </Row>
                </Container>
            </prontuario-patch-note>
        </React.Fragment>
    )
}

export default PatchNote;