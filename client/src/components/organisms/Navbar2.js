import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export default function Navbar2() {
	const { isLoggedIn, user } = useSelector((state) => state.auth);

	return (
		<Navbar bg="white" className="shadow">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img src={logo} alt="Brand Logo" height={45} />
				</Navbar.Brand>
				<Navbar.Collapse>
					{isLoggedIn && (
						<Nav className="ms-4 fw-bold">
							<Nav.Link as={Link} to="/home">
								Home
							</Nav.Link>
						</Nav>
					)}
				</Navbar.Collapse>
				{isLoggedIn ? (
					<Link to="/employed">
						<Button className="mx-2">Profile</Button>
					</Link>
				) : (
					<>
						<Link to="/register">
							<Button variant="outline-primary button-daftar mx-2">Daftar</Button>
						</Link>
						<Link to="/login">
							<Button variant="outline-primary button-daftar mx-2">Login</Button>
						</Link>
					</>
				)}
			</Container>
		</Navbar>
	);
}
