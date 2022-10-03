// import React, { Component } from 'react'
// import styled from 'styled-components'

// import Logo from './Logo'
// import Links from './Links'

// const Container = styled.div.attrs({
//     className: 'container',
// })``

// const Nav = styled.nav.attrs({
//     className: 'navbar navbar-expand-lg navbar-dark bg-dark',
// })`
//     margin-bottom: 20 px;
// `

// class NavBar extends Component {
//     render() {
//         return (
//             <Container>
//                 <Nav>
//                     <Logo />
//                     <Links />
//                 </Nav>
//             </Container>
//         )
//     }
// }

// export default NavBar

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import './navbar.module.css'
import background from './unknown.png'

function greeting() {
	var date = new Date().getHours();
	if(date >= 0 && date < 6) {
		return (
			<>
				É madrugada, vá dormir!
			</>
		)
	} else if (date >= 6 && date < 12) {
		return (
			<>
				Bom dia, Marcelo!
			</>
		)
	} else if (date >= 12 && date < 18) {
		return (
			<>
				Boa tarde, Marcelo!
			</>
		)
	} else {
		return (
			<>
				Boa noite, Marcelo!
			</>
		)
	}
}

function NavBar() {
	
    return (
		<>
		{/* <style type="text/css">
		{`
			.nav-link {
				font-size: 25px; 
				font-style: normal;
				font-weight: 1000;
				color: white;
			}
		`}
		</style> */}
		{[false].map((expand) => (
			<Navbar key={expand} bg="light" expand={expand} className="mb-3">
				<Container fluid>
					<Navbar.Brand href="">Development Mode</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
								{greeting()}
							</Offcanvas.Title>
						</Offcanvas.Header>

						<Offcanvas.Body style={{
						backgroundImage: `url(${background})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						}}>

							<Nav className="justify-content-end flex-grow-1 pe-3">
								{/* <Nav.Link href="#action1">Test 01</Nav.Link>
								<Nav.Link href="#action2">Test 02</Nav.Link> */}
								<Nav.Link>
									<Link to='/' className="nav-link">
										Home
									</Link>
								</Nav.Link>
								<Nav.Link>
									<Link to='/patch-notes' className="nav-link">
										Patch Notes
									</Link>
								</Nav.Link>
								<Nav.Link>
									<Link to='/lista-pacientes' className="nav-link">
										Lista de pacientes
									</Link>
								</Nav.Link>
								<Nav.Link>
									<Link to='/recepcionista' className="nav-link">
										Recepcionista
									</Link>
								</Nav.Link>
								<NavDropdown
								title="Japan V.A."
								id={`offcanvasNavbarDropdown-expand-${expand}`}
								>
									{/* {rotas.map(element => 
										<Dropdown.Item href={element.path}>{element.nome}</Dropdown.Item>
									)} */}
									<Dropdown.Item>Takahashi Rie</Dropdown.Item>
									<Dropdown.Item>Uchida Maaya</Dropdown.Item>

									<NavDropdown.Divider />
									<NavDropdown.Item href="#action">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
							</Form>
						</Offcanvas.Body>
						{/* <div style={{border: 'black', color: 'blue', textAlign: 'center', fontSize: '40px'}}>TE AMO CAROL FELIX</div> */}
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		))}
		</>
	);
}

export default NavBar