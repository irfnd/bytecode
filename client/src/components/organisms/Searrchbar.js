import React from "react";
import { Col, Nav, Navbar, NavDropdown, Button, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function Searchbar() {
	return (
		<Col lg={9} className="mx-auto  bg-light">
			<Navbar bg="white shadow-lg" expand="lg" placeholder="Search">
				<Form className=" outline-none">
					<Form.Control
						type="search"
						placeholder="Search"
						className="bg-transparent border-0 mx-3"
						aria-label="Search"
					/>
				</Form>
				<Navbar.Collapse id="navbarScroll">
					<Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll />
					<Search className="mx-3" />
					<NavDropdown title="Sort" id="nav-dropdown" className="mx-2">
						<NavDropdown.Item eventKey="4.1">filter</NavDropdown.Item>
						<NavDropdown.Item eventKey="4.2">filter</NavDropdown.Item>
						<NavDropdown.Item eventKey="4.3">filter</NavDropdown.Item>
					</NavDropdown>
					<Button variant="outline-primary button-masuk mx-2">Search</Button>
				</Navbar.Collapse>
			</Navbar>
		</Col>
	);
}

export default Searchbar;
