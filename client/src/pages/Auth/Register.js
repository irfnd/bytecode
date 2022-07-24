import React from "react";
import { Card, Container } from "react-bootstrap";

import FormRegister from "../../components/organisms/FormRegister";

const login = () => {
	return (
		<div>
			<Card>
				<Card.Body className="mt-0 mb-0">
					<Container>
						<FormRegister />
					</Container>
				</Card.Body>
			</Card>
		</div>
	);
};

export default login;
