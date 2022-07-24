import React from "react";
// import { Link } from "react-router-dom";
import { Container, Navbar, Image } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import profil from "../../assets/img/profil.jpg";
// import notif from "../../assets/img/notif.png";
import { Bell, Envelope } from "react-bootstrap-icons";

function Navbar1() {
	return (
		<Navbar fixed="top" bg="white" expand="lg">
			<Container>
				<span>
					<Image className="navbar-brand " src={logo} alt="" width={100} height={45} />
				</span>
				<div className="icons">
					<div className="icon">
						<Bell className="mx-2 bellicon" />
						<div className="counter2">2</div>
					</div>
					<div className="icon">
						<Envelope className="mx-2 bellicon" />
						<div className="counter2">2</div>
					</div>
					<div className="icon">
						<Image className="navbar-profil justify-content-center mx-3" src={profil} alt="" width={25} height={25} />
					</div>
				</div>
			</Container>
		</Navbar>
	);
}

export default Navbar1;