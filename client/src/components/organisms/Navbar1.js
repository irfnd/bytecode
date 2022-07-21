import React from "react";
import { Container, Nav, Navbar, Popover, OverlayTrigger } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import profil from "../../assets/img/profil.jpg";
import { Bell, Envelope } from "react-bootstrap-icons";

function Navbar1() {
	return (
		<Navbar bg="white" expand="lg">
			<Container>
				<img className="navbar-brand " src={logo} alt="" width={100} height={45} />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto " style={{ maxHeight: "0px" }} navbarScroll />
					<OverlayTrigger
						trigger="click"
						key="bottom"
						placement="bottom"
						overlay={
							<Popover id="popover-positioned-bottom">
								<Popover.Body>
									<strong>You have new notification</strong>
								</Popover.Body>
							</Popover>
						}
					>
					<Bell />
					</OverlayTrigger>
					<Envelope className="mx-2 justify-content-center" />
					<img className="navbar-profil justify-content-center ms-2 mt-0" src={profil} alt="" width={25} height={25} />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navbar1;
