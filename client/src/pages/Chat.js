import React from "react";
import { Card, Container } from "react-bootstrap";

import NavBar from "../components/organisms/Navbar1"
import Room from "../components/organisms/Room";
import Footer from "../components/organisms/Footer"

const chat = () => {
	return (
		<div>
			<Card>
				<Card.Body className="mt-0 mb-0">
					<Container fluid>
						<NavBar />
						<Room/>
						<Footer />
					</Container>
				</Card.Body>
			</Card>
		</div>
	);
};

export default chat;
