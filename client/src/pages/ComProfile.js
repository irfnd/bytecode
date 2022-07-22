import React from "react";
import { Row, Col, Image, Button, Container, Navbar } from "react-bootstrap";

import avatar from "../assets/img/exAvatar.png"; // Photo Profile Example

// import brand from '../assets/brandLogo.png'; //
// import bell from '../assets/bellLogo.png'; //
import loc from "../assets/icons/locLogo.png"; //
import edit from "../assets/icons/editLogo.png"; //
import mail from "../assets/icons/mailLogo.png"; //
import instagram from "../assets/icons/instagramLogo.png"; //
import phone from "../assets/icons/phoneLogo.png"; //
import linkedin from "../assets/icons/linkedinLogo.png"; //

import logo2 from "../assets/img/logo2.png";
import Navbar1 from "../components/organisms/Navbar1";

export default function ComProfile() {
	return (
		<Container className="solidBGPage pb-5">
		<Row> <Navbar1 /> </Row>
			<Row>
				<Col />
				<Col sm={10} className="compProfile">
					<Container className="gradientBGPageCompProfile compProfile my-5 pb-5">
						{/* COMPANY PROFILE - BEFORE DESCRIPTION */}
						<Row>
							<Col />
							<Col sm={4}>
								<div className="pt-4 pb-4">
									<Row>
										<Col />
										<Col xs={6}>
											<Image className="avatar pb-4" src={avatar} />
										</Col>
										<Col />
									</Row>
									<div className="titleComp">ex PT. Name Company</div>
									<div className="industry pb-2">ex Company Industry</div>

									<span className="inlineIconText">
										<Image src={loc} />
										<span className="p"> ex Company Location</span>
									</span>
								</div>
							</Col>
							<Col>
								<a className="compProfEditBG inlineIconText" href="#changeBackground">
									<Image src={edit} />
									<span> change backgorund</span>
								</a>
							</Col>
						</Row>

						{/* COMPANY DESCRIPTION (NEED MORE + GRID) */}
						<Row>
							<Col />
							<Col sm={6}>
								<div className="p pb-1">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim veniam, quis
									{/* nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum */}
								</div>
							</Col>
							<Col />
						</Row>

						<Row>
							<Col />
							<Col sm={4}>
								{/* AFTER DESCRIPTION - BUTTON TO EDIT PROFILE COMPANY */}
								<Button className="Button doit mt-3 mb-4"> Edit profile </Button>

								{/* COMPANY CONTACT */}
								<Row>
									<Col />
									<Col sm={9} className="mb-5">
										<div className="p">
											<Row className="pSideBarProfile mb-3">
												<Col sm={2}>
													<Image className="icon" src={mail} />
												</Col>
												<Col>
													<a href="#1">Email</a>
												</Col>
											</Row>
											<Row className="pSideBarProfile mb-3">
												<Col sm={2}>
													<Image className="icon" src={instagram} />
												</Col>
												<Col>
													<a href="#2">Instagram</a>
												</Col>
											</Row>
											<Row className="pSideBarProfile mb-3">
												<Col sm={2}>
													<Image className="icon" src={phone} />
												</Col>
												<Col>
													<a href="#3">Github</a>
												</Col>
											</Row>
											<Row className="pSideBarProfile mb-5">
												<Col sm={2}>
													<Image className="icon" src={linkedin} />
												</Col>
												<Col>
													<a href="#4">Gitlab</a>
												</Col>
											</Row>
										</div>
									</Col>
									<Col />
								</Row>
							</Col>
							<Col />
						</Row>
					</Container>
				</Col>
				<Col />
			</Row>
			
			<Row className="bg ">
        <Col lg={10} className="mx-auto mt-5">
					<Image src={logo2} height={50} className="mt-3 mb-3" />
					<p className="mb-5">With supporting text below as a natural lead-in to additional content.</p>
					<hr />
					<Row>
						<Navbar>
							<p>2020 Pewworld. All right reserved</p>
							<Navbar.Collapse className="footerlink justify-content-end">
								<p className="mx-5">Telepon</p>
								<p>Email</p>
							</Navbar.Collapse>
						</Navbar>
					</Row>
        </Col>
    	</Row>
		</Container>
	);
}
