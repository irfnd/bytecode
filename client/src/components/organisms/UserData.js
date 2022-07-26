import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";

import profil from "../../assets/img/profil.jpg";

export default function UserData({ data }) {
	return (
		<Col className="p-0">
			<Container>
				{Array.isArray(data) &&
					data.map((jobseeker) => (
						<Row className="bg-white d-flex align-items-center shadow-sm p-4 border-bottom" key={jobseeker.id}>
							<Col lg={2}>
								<Card.Img className="profilpict" src={jobseeker.user_profile.photo || profil} alt="" />
							</Col>
							<Col>
								<Link to={`/employed/${jobseeker.id}`} className="text-decoration-none">
									<h4 className="mb-1 text-dark">{jobseeker.user_profile.name}</h4>
								</Link>
								<span className="text-silver mb-1">{jobseeker.user_profile.position}</span>
								<div className="d-flex align-items-center mb-2 text-silver">
									<GeoAlt className="me-2" />
									<span>{jobseeker.user_profile.domicile}</span>
								</div>
								<div className="d-flex gap-1">
									{jobseeker.skills.length > 0 ? (
										jobseeker.skills.map((skill) => (
											<Badge bg="warning" className="fs-14 p-2" key={skill.id}>
												{skill.name}
											</Badge>
										))
									) : (
										<Badge bg="secondary" className="fs-14 p-2">
											No Skills
										</Badge>
									)}
								</div>
							</Col>
							<Col className="col-auto">
								<Button as={Link} to={`/employed/${jobseeker.id}`} className="px-4 py-2">
									Lihat Profil
								</Button>
							</Col>
						</Row>
					))}
			</Container>
		</Col>
	);
}
