import React from "react";
import { Card, Container } from "react-bootstrap";

import NavBar from "../components/organisms/Navbar1";
import FormChat from "../components/organisms/FormChat";
import Footer from "../components/organisms/FooterAdi";

const chat = () => {
	return (
		<div>
			<Card>
				<Card.Body className="mt-0 mb-0">
					<Container fluid>
						<NavBar />
						<FormChat />
						<Footer />
					</Container>
				</Card.Body>
			</Card>
		</div>
	);
};

export default chat;
