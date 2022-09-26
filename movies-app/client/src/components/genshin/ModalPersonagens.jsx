import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import api from '../../api/index'

function ModalPersonagem(props){

    // Controle do modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <modal-personagem-genshin>
            <Button variant="outline-primary" onClick={handleShow}>
                Adicionar
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Personagem</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </modal-personagem-genshin>
    )
}

export default ModalPersonagem;