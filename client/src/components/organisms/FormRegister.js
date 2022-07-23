import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Alert from "sweetalert2"

import { registerRecruiter, registerJobSeeker } from "../../Redux/actions/Auth"

import AuthStyles from "../../assets/styles/AuthStyles";

import Picture from "../Molecules/PictureSlide";
import Field from "../Atoms/Field";

const initial = {
	name: '',
	email: '',
	company: '',
	position: '',
	pHone: '',
	password: '',
	rePassword: ''
  };

function FormRegister() {
	const Navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [form, setForm] = useState(initial)
	const [formRecruiter, setFormRecruiter] = useState(false)

	const handleShowForm = () => {
		setForm({
			name: '',
			email: '',
			company: '',
			position: '',
			pHone: '',
			password: '',
			rePassword: ''
		})
		setFormRecruiter(!formRecruiter)
		window.scroll(0, 0)
	}

	const {
		name,
		email,
		company,
		position,
		phone,
		password,
		rePassword
	} = form

	const handleSubmitJobSeeker = (e) => {
		e.preventDefault()
		if ( password !== rePassword ) {
			Alert.fire ({
				icon: 'error',
				tittle: 'Incorrect!',
				text: 'Incorrect Password'
			})
		} else {
			setLoading(true);
			registerRecruiter({
				name,
				email,
				phone,
				password,
				rePassword,
      		})
			.then((res) => {
				Navigate('login')

				Alert.fire ({
					icon: 'success',
					text: `Register success ${res}`
				})
			})
			.catch((err) => {
				Alert.fire ({
					icon: 'error',
					text: `Error! ${err}`
				})
			})
			.finally(() => {
				setForm({
					name: '',
					email: '',
					pHone: '',
					password: '',
					rePassword: ''
				})
			})
		}
	}
	const handleSubmitRecruiter = async (e) => {
		e.preventDefault()
		if ( password !== rePassword ) {
			Alert.fire ({
				icon: 'error',
				tittle: 'Incorrect!',
				text: 'Incorrect Password'
			})
		} else {
			setLoading(true);
			registerJobSeeker({
				name,
				email,
				company,
				position,
				phone,
				password,
				rePassword,
      		})
			.then((res) => {
				Navigate('login')

				Alert.fire ({
					icon: 'success',
					text: `Register success ${res}`
				})
			})
			.catch((err) => {
				Alert.fire ({
					icon: 'error',
					text: `Error! ${err}`
				})
			})
			.finally(() => {
				setForm({
					name: '',
					email: '',
					company: '',
					position: '',
					pHone: '',
					password: '',
					rePassword: ''
				})
			})
		}
	}

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
							<hr className="separator w-100 mt-4" />
							<Form className="w-100 mb-3 mt-3" method="post" encType="multipart/form-data"
								onSubmit={handleSubmitJobSeeker}>
								<Field id="name" label="Name" placeholder="Masukan nama panjang" />
								<Field id="email" label="Email" placeholder="Masukan alamat email" />
								<Field id="perusahaan" label="Perusahaan" placeholder="Masukan nama perusahaan" />
								<Field id="jabatan" label="Jabatan" placeholder="Posisi di perusahaan anda" />
								<Field id="phone" label="No handphone" placeholder="Masukan no hanphone" />
								<Field id="pass" type="password" label="Kata sandi" placeholder="Masukan kata sandi" />
								<Field
									id="repass"
									type="password"
									label="Konfirmasi kata sandi"
									placeholder="Masukan konfirmasi kata sandi"
								/>
								<Button
									type="submit"
									variant="warning" 
									className="w-100 btn-main pt-3 pb-3 mt-5 mb-0"
									isLoading={loading}
								>Daftar</Button>
							</Form>
							<div className="w-100 d-flex flex-column">
								<div className="w-100 d-flex justify-content-center align-items-center">
									<span className="alternative">
										Anda sudah punya akun?{" "}
										<Link to="/login" className="main-color clicked text-decoration-none">
											Masuk disini
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

export default FormRegister;
