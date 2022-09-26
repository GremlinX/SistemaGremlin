import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from '../../style/cardpersonagem.module.css';

function Personagem(props){

    return (
        <personagem-genshin>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src={props.profileImg} />
                <Card.Body>
                    <Card.Title>{props.nome}</Card.Title>
                    
                    <Card.Text>
                        
                    </Card.Text>
                    
                    <Button className={styles.adicionarPersonagem} variant="outline-primary">Adicionar</Button>
                </Card.Body>
            </Card>
        </personagem-genshin>
    )
}

export default Personagem;