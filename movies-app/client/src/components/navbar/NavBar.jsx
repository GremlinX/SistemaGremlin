import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
					bold: 100px;
					font-weight: 500;
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
								// backgroundImage: `url(${background})`,

								// backgroundImage: 'url(https://images.hdqwalls.com/download/a2-nier-automata-art-nw-2160x3840.jpg)',
								
								// backgroundImage: 'url(https://simp4.jpg.church/DwJKFqKV4AMoZJ0-1.jpg)',
								// backgroundImage: 'url(https://simp4.jpg.church/FYmFPDrUIAAed8A.jpg)',
								
								// backgroundImage: 'url(https://faptimeleaks.com/wp-content/uploads/2022/01/image-374-BZXPSIBj-scaled.jpeg)',
								// backgroundImage: 'url(https://cdn2.bitchesgirls.com/file/pink_sparkles-pnky_sparkles-pink_sparkles-pnky_sparkles-thicc-porn-videos/229809282356786307685825560349054745577.jpg)',
								// backgroundImage: 'url(https://cdn2.bitchesgirls.com/file/pink_sparkles-pnky_sparkles-pink_sparkles-pnky_sparkles-thicc-porn-videos/29056623321644574002740079251163599264.jpg)',
									// backgroundImage: 'url(https://cdn2.bitchesgirls.com/file/pink_sparkles-pnky_sparkles-pink_sparkles-pnky_sparkles-thicc-porn-videos/312722912264636980854405326665648173816.jpg)',
								// backgroundImage: 'url(https://cdn2.bitchesgirls.com/file/pink_sparkles-pnky_sparkles-pink_sparkles-pnky_sparkles-thicc-porn-videos/128554822356868875754697055050042442114.jpg)',
								// backgroundImage: 'url(https://cdn2.bitchesgirls.com/file/pink_sparkles-pnky_sparkles-pink_sparkles-pnky_sparkles-thicc-porn-videos/60415698360391975206825541206708034507.jpg)',
								// backgroundImage: 'url(https://cdn2.bitchesgirls.com/file/pink_sparkles-pnky_sparkles-pink_sparkles-pnky_sparkles-thicc-porn-videos/339568746558687870808691262588095787657.jpg)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/Eu2Skb3VEAM07zc?format=jpg&name=4096x4096)',
								// backgroundImage: 'url(https://faptimeleaks.com/wp-content/uploads/2022/01/image-357-cI68wSmE-scaled.jpeg)',
								// backgroundImage: 'url(https://faptimeleaks.com/wp-content/uploads/2022/01/image-354-kHjz2Up2-scaled.jpeg)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/E9piZqPUcAAZtjS?format=jpg&name=4096x4096)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/E9pibASVIAIlsKc?format=jpg&name=4096x4096)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/FRxib1OXIAIc_Ho?format=jpg&name=4096x4096)',
								// backgroundImage: 'url()',

								// backgroundImage: 'url(https://pbs.twimg.com/media/FcinBbsaUAI8kDc?format=jpg&name=4096x4096)',
								// backgroundImage: 'url(https://livedoor.blogimg.jp/gravurezasshimini11/imgs/1/0/101782e9.jpg)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/FKM2m3SaAAQVpOQ?format=jpg&name=4096x4096)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/FZhzGHHUcAAYefy?format=jpg&name=large)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/FFQeQfRaMAAMePo?format=jpg&name=4096x4096)',
								// backgroundImage: 'url(https://www.mymypic.net/data/attachment/forum/202207/18/104248obpvx0gz0omu0ogt.jpg)',
								// backgroundImage: 'url(https://livedoor.blogimg.jp/gravurezasshimini11/imgs/a/e/aeef15c0.jpg)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/FcLeBZuakAAAqKc?format=jpg&name=large)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/FcGpAHOaAAUzWWG?format=jpg&name=4096x4096)',
								// backgroundImage: 'url(https://livedoor.blogimg.jp/ginjimasu2/imgs/5/d/5da79786.jpg)',
								// backgroundImage: 'url(https://64.media.tumblr.com/0c5f57f373bd1f93e1d7929178d0a993/05e5a10f271aa7f5-34/s2048x3072/5a8401c7cb3246f4134f29ddd25f37b8f257391b.jpg)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/FW3LrJWakAAiHyj?format=jpg&name=4096x4096)',
								// backgroundImage: 'url(https://xiaogirls.com/uploads/2022/09/6551Tx8uzyJGQ3gqMG-g.jpg)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/FcYCVXaaUAEDzGd?format=jpg&name=large)',
								// backgroundImage: 'url(https://i0.wp.com/img.depday.info/d1/UGJMTE5pbVBzTXg5SFZ0UkQ3Zit4RmhNQThKRnJCT3ViSkE3MzBSTXB0aHVGYU9xOXE5bjd0VEFyY2ZGdVFOSg-d.jpg)',
								// backgroundImage: 'url(https://xiaogirls.com/uploads/2022/09/39546dQVghMUZ4j49gEe.jpg)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/FZ9pvz1UYAU3d-3?format=jpg&name=large)',
								// backgroundImage: 'url(https://xiaogirls.com/uploads/2022/09/77524eN7PinkFXvHLSSP5.jpg)',
								// backgroundImage: 'url(https://pbs.twimg.com/media/FHMf2qWaMAUMj6Y?format=jpg&name=4096x4096)',
								// backgroundImage: 'url(https://livedoor.blogimg.jp/gravurezasshimini11/imgs/6/5/659b153c.jpg)',
								// backgroundImage: 'url(https://xiaogirls.com/uploads/2022/09/57833MMGdJ8EkoCUkNJ2.jpg)',
								// backgroundImage: 'url(https://cdn.discordapp.com/attachments/707022094235467842/1036079192409919538/YabaiPose2.png)',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
							}}>
								<Nav className="justify-content-end flex-grow-1 pe-3">
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
									<Nav.Link>
										<Link to='/agenda' className="nav-link">
											Agenda
										</Link>
									</Nav.Link>
									<Nav.Link>
										<Link to='/cadastro' className="nav-link">
											Cadastrar
										</Link>
									</Nav.Link>
									<Nav.Link>
										<Link to='/login' className="nav-link">
											Login
										</Link>
									</Nav.Link>
								</Nav>
								{/* <Form className="d-flex">
									<FormControl
										type="search"
										placeholder="Search"
										className="me-2"
										aria-label="Search"
									/>
									<Button variant="outline-success">Search</Button>
								</Form> */}
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}

export default NavBar