import React from "react";
import { Container, Row, Col, Button, Card, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import profil from "../../assets/img/profil.jpg";
import { GeoAlt, Search } from "react-bootstrap-icons";
import userdata from "./userdummy";
import { Link } from "react-router-dom";

// import axios from "axios";
const Datacard = function () {
	// const [listUsers, setListUsers] = React.useState([]);
	// const [filterValue, setFilterValue]=React.useState("");
	const [data, setData] = React.useState(userdata);


	// React.useEffect(() => {
	// 	axios.get(`${process.env.REACT_APP_API_URL}/users`).then((res) => {
	// 		setListUsers(res?.data?.data ?? []);
	// 	});
	// }, []);

	const filterSearch = (category) => {
		const result = userdata.filter((item) => {
			return item.username.toLowerCase().includes(category);
		});
		setData(result)
	};

	console.log(userdata)

	return (
		<>
			<Col lg={9} className="mx-auto  bg-light">
				<Navbar bg="white shadow-lg" expand="lg" placeholder="Search">
					<Form className=" outline-none">
						<Form.Control
							type="search"
							placeholder="Search"
							className="bg-transparent border-0 mx-3"
							aria-label="Search"
							// value={filterValue}
							// onChange={(e)=>setSearchData(e)}
							onChange={(e) => {
								filterSearch(e.target.value);
							}}
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

			<Col lg={9} className=" mx-auto shadow-lg ">
				<Card>
					<Card.Body>
						<Container>
							{data.map((item) => (
								<div key={item.id}>
									<Row>
										<Col lg={9}>
											<Row>
												<Col lg={3}>
													<Card.Img className="profilpict" src={item?.profil} alt="" height={150} />
												</Col>
												<Col lg={9} className="">
													<h4>{item?.username}</h4>
													<p>{item?.job}</p>
													<Row className="mb-2">
														<span>
															<GeoAlt className="d-inline" />
															<p className="d-inline">{item?.lokasi}</p>
														</span>
													</Row>
													<div className="mt-3">
														{item?.skills.map((e) => {
															return <Button variant="warning mx-1"><p>{e?.name}</p></Button>;
														})}
													</div>
												</Col>
											</Row>
										</Col>
										<Col lg={2} className="justify-content-center mx-auto">
											<Row className="mb-3">
												<Link to="/employed">
													<Button variant="btn button-profil mt-5 text-light">Lihat Profil</Button>
												</Link>
											</Row>
										</Col>
										<div className="hr mt-3" />
									</Row>
								</div>
							))}
						</Container>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default Datacard;
