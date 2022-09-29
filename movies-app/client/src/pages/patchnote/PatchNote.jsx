import React from "react";
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';

function PatchNote(){

    return (
        <React.Fragment>
            <prontuario-patch-note style={{color: 'white'}}>
                <Container fluid>
                    <ListGroup as='ol' numbered>
                        <h2>28/09</h2>
                        <ListGroup.Item>Criado a tela de recepcionista sem funcionalidade.</ListGroup.Item>
                        <ListGroup.Item>Ajusta carregamento de dados do banco na tela /lista-paciente.</ListGroup.Item>
                        <ListGroup.Item>Adiciona patch notes ao sistema.</ListGroup.Item>
                    </ListGroup>
                </Container>
            </prontuario-patch-note>
        </React.Fragment>
    )
}

export default PatchNote;