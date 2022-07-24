import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Col, Form, Button } from "react-bootstrap";

import FormRegisterJobseeker from "../Molecules/FormRegisterJobseeker";
import FormRegisterRecruiter from "../Molecules/FormRegisterRecruiter";
import { registerJobseeker, registerRecruiter } from "../../helpers/formValidations";

function FormRegister() {
	const [isJobseeker, setIsJobseeker] = useState(true);

	const formOption = { resolver: yupResolver(isJobseeker ? registerJobseeker : registerRecruiter) };
	const { register, handleSubmit, formState, reset } = useForm(formOption);
	const { errors } = formState;

	const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
	const onSubmit = (data) => console.log(data);

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
						<FormRegisterJobseeker {...{ register, errors }} />
					) : (
						<FormRegisterRecruiter {...{ register, errors }} />
					)}

					<Button type="submit" variant="warning" size="lg" className="w-100 mt-4 mb-2 text-white">
						Daftar
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
