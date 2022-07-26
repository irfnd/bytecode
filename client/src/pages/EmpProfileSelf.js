import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { JobseekerActions } from "../Redux/slices/jobseekerSlice";
import moment from "moment";

import { Container, Row, Col, Image, Button, Tabs, Tab } from "react-bootstrap";
import { GeoAlt, Envelope } from "react-bootstrap-icons";

import profil from "../assets/img/profil.jpg";

import Navbar1 from "../components/organisms/Navbar1";
import Footer from "../components/organisms/FooterAdi";

export default function EmpProfileElse() {
	const { user } = useSelector((state) => state.auth);
	const { jobseekers } = useSelector((state) => state.jobseeker);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(JobseekerActions.getProfile());
	}, [dispatch]);

	const getMonth = (startDate, endDate) => {
		const start = moment(startDate.split("-"));
		const end = endDate ? moment(endDate.split("-")) : moment();
		return ` (${end.diff(start, "months")} Bulan)`;
	};

	return (
		jobseekers && (
			<>
				<Navbar1 />
				<div className="gradientBGPage">
					<Container>
						<Row className="py-5">
							<Col sm={3}>
								<Row className="m-0">
									<div className="whiteBg pt-4 pb-5 px-4">
										<Row className="d-flex justify-content-center m-0 w-100">
											<Col sm={8}>
												<Image className="mb-4" roundedCircle fluid src={jobseekers?.user_profile?.photo || profil} />
											</Col>
										</Row>
										<div className="h1SideBarProfile mb-2">{jobseekers?.user_profile?.name}</div>
										<div className="h2SideBarProfile fs-16 mb-2">{jobseekers?.user_profile?.position}</div>

										<div className="pSideBarProfile d-flex align-items-center fs-16 mb-2">
											<GeoAlt className="me-2" />
											{jobseekers?.user_profile?.domicile}
										</div>
										<div className="pSideBarProfile fs-16">{jobseekers?.user_profile?.shortDesc}</div>

										{user?.type === jobseekers?.type ? (
											<Link to="/employed/edit">
												<Button className="Button doit mt-3 mb-4">Edit profile</Button>
											</Link>
										) : (
											<Link to="/hire">
												<Button className="Button doit mt-3 mb-4">Hire</Button>
											</Link>
										)}

										<div className="h1SideBarProfile mb-2">Skill</div>
										<div className="mb-4 d-flex flex-wrap">
											{jobseekers?.skills ? (
												jobseekers?.skills.map((skill) => (
													<div key={skill.id} className="theTag">
														{skill.name}
													</div>
												))
											) : (
												<div className="theTag">No Skills</div>
											)}
										</div>

										<Row className="pSideBarProfile mb-2">
											<Col className="d-flex align-items-center">
												<Envelope className="me-2" size={16} />
												<span className="fs-14">{jobseekers?.email}</span>
											</Col>
											{jobseekers?.instagram && (
												<Col>
													<span>{jobseekers?.instagram}</span>
												</Col>
											)}
											{jobseekers?.github && (
												<Col>
													<span>{jobseekers?.github}</span>
												</Col>
											)}
										</Row>
									</div>
								</Row>
							</Col>

							<Col>
								<Container className="whiteBg pt-3 pb-5 px-4">
									<Tabs defaultActiveKey="tab1" className="mb-3">
										<Tab eventKey="tab1" title="Portofolio">
											<div className="portoPage">
												<Row>
													{jobseekers?.portfolios?.length > 0 ? (
														jobseekers?.portfolios.map((portfolio) => (
															<Col sm={4} className="mb-4 theTitle">
																<Image src={portfolio.photo} />
																<div className="portoTitle">{portfolio.name}</div>
															</Col>
														))
													) : (
														<Col className="text-center py-3">
															<h4 className="text-silver m-0">Belum ada portofolio</h4>
														</Col>
													)}
												</Row>
											</div>
										</Tab>

										<Tab eventKey="tab2" title="Job Experiences">
											<div className="jobsExpPage">
												{jobseekers?.companies?.length > 0 ? (
													jobseekers?.companies.map((workExp) => (
														<Row className="mb-4 border-bottom">
															<Col sm={2}>
																<Image src={workExp.photo} />
															</Col>
															<Col sm={10}>
																<div className="theTitle">{workExp.work_experience.position}</div>
																<div className="theComp mb-1">{workExp.name}</div>
																<div className="theDate mb-1">
																	{workExp.work_experience.startDate} - {workExp.work_experience.endDate || "Sekarang"}
																	{getMonth(workExp.work_experience.startDate, workExp.work_experience.endDate)}
																</div>
																<div className="theDesc mb-4">{workExp.work_experience.shortDesc}</div>
															</Col>
														</Row>
													))
												) : (
													<Row>
														<Col className="text-center py-3">
															<h4 className="text-silver m-0">Belum ada pengalaman kerja</h4>
														</Col>
													</Row>
												)}
											</div>
										</Tab>
									</Tabs>
								</Container>
							</Col>
						</Row>
					</Container>
				</div>
				<Footer />
			</>
		)
	);
}
