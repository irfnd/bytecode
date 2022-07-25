import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { register as registerUser } from "../../Redux/actions/Auth";

import { Col, Form, Button, Spinner } from "react-bootstrap";
import Alert from "sweetalert2";

import FieldsRegisterJobseeker from "../Molecules/FieldsRegisterJobseeker";
import FieldsRegisterRecruiter from "../Molecules/FieldsRegisterRecruiter";
import { registerJobseeker, registerRecruiter } from "../../helpers/formValidations";

function FormRegister() {
	const [isJobseeker, setIsJobseeker] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const formOption = { resolver: yupResolver(isJobseeker ? registerJobseeker : registerRecruiter) };
	const { register, handleSubmit, formState, reset } = useForm(formOption);
	const { errors } = formState;
	const navigate = useNavigate();

	const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
	const onSubmit = (data) => {
		setIsSubmitting(true);
		const { rePassword, ...newData } = data;
		registerUser(newData)
			.then((res) => {
				console.log(res);
				setIsSubmitting(false);
				Alert.fire({
					icon: "success",
					text: res.message,
				});
				navigate("/login");
			})
			.catch((err) => {
				console.log(err);
				setIsSubmitting(false);
				Alert.fire({
					icon: "error",
					text: err,
				});
			});
	};

	return (
		<Col lg="6" className="offset-6 d-flex justify-content-center align-items-center">
			<div className="col-10 d-flex flex-column justify-content-center py-5">
				<h2 className="title">Halo, Pewpeople</h2>
				<span className="secondary-color description mt-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
				</span>
				<hr className="separator w-100 mt-4" />
				<Form className="w-100 mb-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
					<input type="hidden" name="type" value={isJobseeker ? "jobseeker" : "recruiter"} {...register("type")} />
					{isJobseeker ? (
						<FieldsRegisterJobseeker {...{ register, errors }} />
					) : (
						<FieldsRegisterRecruiter {...{ register, errors }} />
					)}

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
							"Daftar"
						)}
					</Button>

					<Button
						variant="outline-warning"
						size="lg"
						className="w-100 btn-text"
						onClick={() => {
							setIsJobseeker(!isJobseeker);
							reset(null);
							scrollTop();
						}}
					>
						Daftar Sebagai {!isJobseeker ? "Pelamar" : "Perekrut"}
					</Button>
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
	);
}

export default FormRegister;
