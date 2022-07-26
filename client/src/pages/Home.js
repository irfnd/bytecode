import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { JobseekerActions } from "../Redux/slices/jobseekerSlice";

import { Row, Col, Container, InputGroup, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

import UserData from "../components/organisms/UserData";
import Navbar1 from "../components/organisms/Navbar1";
import Footer from "../components/organisms/Footer";
import Slidepagination from "../components/Molecules/Slidepagination";

function App() {
	const [search, setSearch] = useState("");
	const [sorts, setSorts] = useState("");
	const [size, setSize] = useState(5);
	const [page, setPage] = useState(1);
	const { isLoggedIn, user } = useSelector((state) => state.auth);
	const { jobseekers } = useSelector((state) => state.jobseeker);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isLoggedIn) return navigate("/login");
		if (user?.type !== "recruiter") return navigate("/");
		return dispatch(JobseekerActions.getJobseekers({ search, sort: sorts, size, page }));
	}, [dispatch, search, sorts, size, page]);

	return (
		jobseekers && (
			<div className="bg-light">
				<Navbar1 />
				<Row className="background txt-light m-0 mb-5 py-3">
					<Col className="text-light">
						<Container>
							<h4 className="mb-0">Top Jobs</h4>
						</Container>
					</Col>
				</Row>

				<Row className="d-flex justify-content-center m-0">
					<Col className="bg-light mb-5">
						<Container>
							<Row className="flex-row bg-white py-2 shadow-sm">
								<Col className="border-end">
									<InputGroup>
										<Form.Control
											size="lg"
											type="text"
											className="bg-transparent border-0 fs-16"
											placeholder="Search for any skill"
											value={search}
											onChange={(e) => setSearch(e.target.value)}
										/>
										<InputGroup.Text className="bg-transparent border-0">
											<Search className="text-silver" size={20} />
										</InputGroup.Text>
									</InputGroup>
								</Col>
								<Col lg={3} className="d-flex">
									<Form.Select
										size="lg"
										className="bg-transparent border-0 fs-16"
										placeholder="Sort"
										value={sorts}
										onChange={(e) => setSorts(e.target.value)}
									>
										<option value={null}>Sort</option>
										<option value="name">Sortir berdasarkan Nama</option>
										<option value="skills">Sortir berdasarkan Skill</option>
									</Form.Select>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
				<Row className="d-flex justify-content-center m-0">
					<UserData data={jobseekers} />
				</Row>
				<Slidepagination />
				<Footer />
			</div>
		)
	);
}

export default App;
