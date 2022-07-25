import React,{ useState} from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

import profil from "../assets/img/profil.jpg";

import loc from "../assets/icons/locLogo.png"; //

import Navbar1 from "../components/organisms/Navbar1Adi";
import Footer from "../components/organisms/FooterAdi";
import axios from "axios";
import Alert from "sweetalert2"

export default function Hire() {
	const options = [
		{value: '', text: '-Project Select-'},
		{value: '1', text: 'ProjectOne'},
		{value: '2', text: 'ProjectTwo'},
		{value: '3', text: 'ProjectThree'},
	  ];

	const [purpose, setpurpose] = useState(options[0].value);
	const [fullName, setfullName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [description, setDescription] = useState('');

	
	  const handleChange = event => {
		setpurpose(event.target.value);
	  };
	
	const handleSubmitJobSeeker = async(e)=>{
		e.preventDefault()
		try {
			await axios.post('http://localhost:8000/notification',{
				purpose,
				fullName,
				email,
				phoneNumber,
				description  
			}).then(()=>{
				Alert.fire ({
					icon: 'success',
					text: `perfect message sent`
				})
			})
		} catch (error) {
			console.log(error);
		}

	}


	


	return (
		<>
		<Navbar1 />
		<div className="solidBGPage">
			<Container>
				<Row className="py-5">
					<Col sm={1} />

					{/* LEFT SIDE BAR */}
					<Col sm={3} className="me-3">
						<Row>
							<div className="whiteBg pt-4 pb-2 px-4">
								<Row>
									<Col />
									<Col xs={6}>
										<Image className="circleImage pb-4" src={profil} />
									</Col>
									<Col />
								</Row>
								<div className="h1SideBarProfile pb-1">Louis Tomlinson</div>

								<div className="deskCompJSeekProfile pb-3">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								</div>

								<Row className="pSideBarProfile pb-3">
									<Image className="loc" src={loc} />
									Purwokerto, Jawa Tengah
								</Row>

								<div className="pSideBarProfile pb-1">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim veniam, quis
									{/* nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum */}
								</div>

								<div className="h1SideBarProfile mb-2">Skill</div>
								<div className="mb-4 d-flex flex-wrap">
									<div className="theTag">javascript</div>
									<div className="theTag">python</div>
									<div className="theTag">java</div>
									<div className="theTag">C++</div>
									<div className="theTag">php</div>
									<div className="theTag">Golang</div>
								</div>
							</div>
						</Row>
					</Col>

					{/* RIGHT SIDE BAR checkBGCompJSeekProfile */}
					<Col sm={7} className="ps-5 pe-5">
						<div className="titleContactJseek mb-2">Contact to NAME_JOBSEEKER</div>
						<div className="deskCompJSeekProfile mb-5">
							Description before hire Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut
						</div>

						{/* Form for Company to hiring Jobseeker */}
						<Form  onSubmit={handleSubmitJobSeeker}>
							<Form.Group className="mb-3 pSideBarProfile" controlId="purpose">
								<Form.Label>Purpose of this message</Form.Label>
								<Form.Select value={purpose} onChange={handleChange} size="md" aria-label="Default select example" style={{ color: "gray" }}>
								{options.map(option => (
									<option key={option.value} value={option.value} style={{ color: "black" }}>
										{option.text}
									</option>
									))}
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-4 pSideBarProfile" controlId="fullname">
								<Form.Label className="mb-1">Full name</Form.Label>
								<Form.Control size="md" type="text" placeholder="Input full name" 
								value={fullName}
								onChange={(event) => setfullName(event.target.value)}
								/>
								{/* <Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text> */}
							</Form.Group>

							<Form.Group className="mb-4 pSideBarProfile" controlId="email">
								<Form.Label className="mb-1">email</Form.Label>
								<Form.Control size="md" type="text" placeholder="Input email" 
								value={email}
								onChange={(event) => setEmail(event.target.value)}/>
							</Form.Group>

							<Form.Group className="mb-4 pSideBarProfile" controlId="phone">
								<Form.Label className="mb-1">Handphone number</Form.Label>
								<Form.Control size="md" type="number" placeholder="Input handphone number"
								value={phoneNumber}
								onChange={(event) => setPhoneNumber(event.target.value)}/>
							</Form.Group>

							<Form.Group className="mb-4 pSideBarProfile" controlId="description">
								<Form.Label className="mb-1">Description</Form.Label>
								<Form.Control as="textarea" rows={6} size="md" placeholder="Description"
								value={description}
								onChange={(event) => setDescription(event.target.value)}/>
							</Form.Group>

							<Button className="Button doit my-4" type="submit">Hire</Button>
						</Form>
					</Col>

					<Col sm={1} />
				</Row>
				
			</Container>
		</div>
		<Footer />
		</>
	);
}
