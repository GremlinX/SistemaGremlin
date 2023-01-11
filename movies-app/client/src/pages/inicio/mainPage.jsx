import React from 'react'
import Accordion from 'react-bootstrap/esm/Accordion'
import Button from 'react-bootstrap/esm/Button';

var takoImages = [];
    for (let index = 1; index <= 500; index++) {
        takoImages[index] = 'https://static11.hentai-cosplays.com/upload/20220908/311/318442/'+index+'.jpg'
    }

const btnBackToTop = {
    display: 'block',
    position: 'sticky',
    margin: '0 0 0 1rem',
    bottom: '1rem',
    borderRadius: '100%'
};
const handleScrolltoTop = (ref) => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

const setPersonLayoutStyle = {
    display: 'block',
    textAlign: 'center'
}

const imageStyle = {
    height: '50%',
    width: '50%'
}

function HomePage(){

    return (
        <app-home-page>
            <h1 style={{color: 'white'}}>Welcome to the main page.</h1>
            <h2 style={{color: 'white'}}>Project is still under development...</h2>
        </app-home-page>
    )
}

export default HomePage;