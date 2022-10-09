import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalBox(props) {
    function handleClose() {
        props.close(false, '');
    }

    return (
        <>
            <Modal show={props.open.isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>CONFIRMAR EXCLUSÃO</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                A exclusão do paciente {props.open.nomePaciente} é irreversível.
                <br/>
                Deseja realmente excluir?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="outline-danger" onClick={() => props.onDelete(props.open.idx)}>
                    Sim, quero excluir
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalBox