import React from "react";
import { Container, Row, Col, Image, Form, Button, Navbar } from "react-bootstrap";

import avatar from "../assets/img/exAvatar.png"; // Photo Profile Example

// import brand from '../assets/brandLogo.png'; //
// import bell from '../assets/bellLogo.png'; //
import loc from "../assets/icons/locLogo.png"; //
// import mail from '../assets/mailLogo.png'; //

import logo2 from "../assets/img/logo2.png";
import Navbar1 from "../components/organisms/Navbar1";

export default function CompEdit() {
	return (
		<Container className="gradientBGPage">
		<Row> <Navbar1 /> </Row>
			<Row className="py-5">
				<Col sm={1} />

				{/* LEFT SIDE BAR */}
				<Col sm={3}>
					{/* PROFILE */}
					<Row className="whiteBg pt-4 pb-4 px-4">
						<Row>
							<Col />
							<Col xs={6}>
								<Image className="avatar pb-3" src={avatar} />
							</Col>
							<Col />
						</Row>
						<div className="h1SideBarProfile pb-1">PT Company Name</div>
						<div className="h2SideBarProfile pb-2">Financial Industry</div>

						<Row className="pSideBarProfile pb-2">
							<Image className="loc" src={loc} />
							Purwokerto, Jawa Tengah
						</Row>
					</Row>

					{/* BUTTON FOR SAVE & CANCEL OF EDITING */}
					<div className="profilSaveCancel">
						<Row>
							<Button className="Button doit mt-3 mb-2">Save</Button>

							<Button className="Button cancel mb-2">Cancel</Button>
						</Row>
					</div>
				</Col>

				{/* RIGHT SIDE BAR */}
				<Col sm={7}>
					{/* JSeek edit profile form 1 */}
					<div className="whiteBg ms-3 mb-3 pb-4">
						<Container className="ps-4 pe-4">
							<div className="titleEditProfile pt-4">Company Profile</div>
						</Container>
						<hr />
						<Container className="ps-4 pe-4">
							<Form>
								<Form.Group className="mb-4 pSideBarProfile" controlId="companyName">
									<Form.Label className="mb-1">Company name</Form.Label>
									<Form.Control size="md" type="text" placeholder="Input company name" />
									{/* <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text> */}
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="industry">
									<Form.Label className="mb-1">Industry</Form.Label>
									<Form.Control size="md" type="text" placeholder="Input industry od company ex: Financial" />
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="domicile">
									<Form.Label className="mb-1">City</Form.Label>
									<Form.Control size="md" type="text" placeholder="Input city" />
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="description">
									<Form.Label className="mb-1">Description</Form.Label>
									<Form.Control as="textarea" rows={5} size="md" placeholder="Enter description" />
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="workplace">
									<Form.Label className="mb-1">Email</Form.Label>
									<Form.Control size="md" type="email" placeholder="Input email" />
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="instagram">
									<Form.Label className="mb-1">Instagram</Form.Label>
									<Form.Control size="md" type="text" placeholder="Input instagram" />
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="phonenumber">
									<Form.Label className="mb-1">Phone number</Form.Label>
									<Form.Control size="md" type="text" placeholder="Input phone number" />
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="linkedin">
									<Form.Label className="mb-1">Linkedin</Form.Label>
									<Form.Control size="md" type="text" placeholder="Input linkedin" />
								</Form.Group>
							</Form>
						</Container>
					</div>
				</Col>

				<Col sm={1} />
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
