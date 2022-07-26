import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../Redux/slices/authSlice";
import { MessageActions } from "../../Redux/slices/messageSlice";

import { Col, Form, Button, Spinner } from "react-bootstrap";

import FieldsLogin from "../Molecules/FieldsLogin";
import { login as loginSchema } from "../../helpers/formValidations";

export default function FormLogin() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const formOption = { resolver: yupResolver(loginSchema) };
	const { register, handleSubmit, formState } = useForm(formOption);
	const { errors } = formState;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(MessageActions.clearMessage());
	}, [dispatch]);

	const onSubmit = (data) => {
		setIsSubmitting(true);
		dispatch(AuthActions.login(data))
			.unwrap()
			.then(() => {
				setIsSubmitting(false);
				navigate("/");
			})
			.catch(() => {
				setIsSubmitting(false);
			});
	};

	return (
		<Col lg="6" className="offset-6 d-flex vh-100 justify-content-center align-items-center">
			<div className="col-10 d-flex flex-column justify-content-center py-5">
				<h2 className="title">Halo, Pewpeople</h2>
				<span className="secondary-color description mt-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
				</span>
				<hr className="separator w-100 mt-4" />
				<Form className="w-100 mb-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
					<FieldsLogin {...{ register, errors }} />

					<div className="w-100 d-flex justify-content-end mb-3">
						<Link to="/auth/forgot" className="forgot">
							Lupa kata sandi?
						</Link>
					</div>

					<Button
						type="submit"
						variant="warning"
						size="lg"
						className="w-100 mt-4 mb-2 text-white"
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<>
								<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Loading
							</>
						) : (
							"Masuk"
						)}
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
	);
}
