import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Alert from "sweetalert2";

import { login } from "../../Redux/actions/Auth";

import AuthStyles from "../../assets/styles/AuthStyles";

import Picture from "../Molecules/PictureSlide";
import Field from "../Atoms/Field";

function FormLogin() {
	const Navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email || !password ) {
			Alert.fire({
				icon: "Error",
				text: "All field must be filled!",
			});
		} else {
			setLoading(true);
			login(email, password)
				.then((res) => {
					Cookies.set("token", res.token);
					Alert.fire({
						icon: "success",
						text: "Login success!",
					});
					Navigate("/home");
				})
				.catch((err) => {
					Alert.fire({
						icon: "error",
						text: `Incorrect password! ${err}`,
					});
				});
		}

		
	};

	return (
		<>
			<AuthStyles />
			<Container fluid>
				<Row>
					<Picture />
					<Col lg="6" className="custom d-flex justify-content-center align-items-center">
						<div className="col-10 justify-content-center">
							<h2 className="title">Halo, Pewpeople</h2>
							<span className="secondary-color description mt-4 mb-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
							</span>
							<hr className="separator w-100 mb-0 mt-1" />
							<Form className="w-100 mb-3 mt-3" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
								<Field
									label="Email"
									id="inputEmail"
									type="email"
									name="email"
									placeholder="Masukan alamat email"
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<Field
									label="Kata sandi"
									type="password"
									name="password"
									placeholder="Masukan kata sandi"
									autocomplete="current-password"
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
								<div className="w-100 d-flex justify-content-end mb-3">
									<Link to="/auth/forgot" className="forgot">
										Lupa kata sandi?
									</Link>
								</div>

								<Button
									type="submit"
									variant="warning"
									className="w-100 btn-main pt-3 pb-3 mt-5 mb-0"
									isLoading={loading}
								>
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
