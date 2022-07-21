import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import AuthStyles from "../../assets/styles/AuthStyles";

import Picture from "../Molecules/PictureSlide";
import Field from "../Atoms/Field";

function FormLogin() {
	return (
		<>
			<AuthStyles />
			<Container fluid>
				<Row>
					<Picture />
					<Col lg="6" className="custom d-flex justify-content-center align-items-center">
						<div className="col-10 d-flex flex-column justify-content-center p-0">
							<h2 className="title">Halo, Pewpeople</h2>
							<span className="secondary-color description mt-4 mb-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
							</span>
							<hr className="separator w-100 mb-0 mt-1" />
							<Form className="w-100 mb-3 mt-3" method="post" encType="multipart/form-data" action="#">
								<Field type="email" id="inputEmail" label="Email" placeholder="Masukan alamat email" />
								<Field type="password" id="inputPassword" label="Kata sandi" placeholder="Masukan kata sandi" />
								<div className="w-100 d-flex justify-content-end mb-3">
									<Link to="/auth/forgot" className="forgot">
										Lupa kata sandi?
									</Link>
								</div>

								<Button variant="warning" className="w-100 btn-main pt-3 pb-3 mt-5 mb-0">
									Masuk
								</Button>
							</Form>
							<div className="w-100 d-flex flex-column">
								<div className="w-100 d-flex justify-content-center align-items-center">
									<span className="alternative">
										Anda belum punya akun?
										<Link to="/register" className="main-color clicked text-decoration-none">
											Daftar disini
										</Link>
									</span>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default FormLogin;
