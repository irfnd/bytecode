import { Row } from "react-bootstrap";
import AuthStyles from "../../assets/styles/AuthStyles";

import Picture from "../../components/Molecules/PictureSlide";
import FormRegister from "../../components/organisms/FormRegister";

export default function Register() {
	return (
		<div className="m-0 bg-white-smoke">
			<Row className="m-0">
				<AuthStyles />
				<Picture />
				<FormRegister />
			</Row>
		</div>
	);
}
