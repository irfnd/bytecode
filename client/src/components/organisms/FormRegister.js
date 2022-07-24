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
	phone: '',
	password: '',
	rePassword: ''
  };

function FormRegister() {
	const Navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [form, setForm] = useState(initial)
	const [formRecruiter, setFormRecruiter] = useState(false)

	/* const handleShowForm = () => {
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
	} */

	const {
		name,
		email,
		company,
		position,
		phone,
		password,
		rePassword
	} = form

	const handleChange = (e) => {
		// const { name, value } = e.target;
		setForm({ ...form, [e.target.id]: e.target.value });
	};

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
					phone: '',
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
					phone: '',
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
								<Field id="name" label="Name" placeholder="Masukan nama panjang" 
									onChange={handleChange} />
								<Field id="email" label="Email" placeholder="Masukan alamat email" 
									onChange={handleChange} />
								<Field id="perusahaan" label="Perusahaan" placeholder="Masukan nama perusahaan" 
									onChange={handleChange} />
								<Field id="jabatan" label="Jabatan" placeholder="Posisi di perusahaan anda" 
									onChange={handleChange} />
								<Field id="phone" label="No handphone" placeholder="Masukan no hanphone" 
									onChange={handleChange} />
								<Field type="password" name="password" label="Kata sandi" placeholder="Masukan kata sandi" autocomplete="new-password"
									onChange={handleChange} />
								<Field type="password" name="rePassword" label="Konfirmasi kata sandi" placeholder="Masukan konfirmasi kata sandi" autocomplete="new-password"
									onChange={handleChange} />
								<Button
									type="submit"
									variant="warning" 
									className="w-100 btn-main pt-3 pb-3 mt-5 mb-0"
									isloading={loading}
								>Daftar</Button>
								<Button
									variant="light" 
									className="w-100 btn-main pt-3 pb-3 mt-2 mb-0"
									onClick={handleSubmitRecruiter}
									isloading={loading}
								>Daftar recruiter</Button>
								
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
