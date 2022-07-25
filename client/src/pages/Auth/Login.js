import { Row } from "react-bootstrap";
import AuthStyles from "../../assets/styles/AuthStyles";

import Picture from "../../components/Molecules/PictureSlide";
import FormLogin from "../../components/organisms/FormLogin";

export default function Login() {
	return (
		<div className="m-0 bg-white-smoke">
			<Row className="m-0">
				<AuthStyles />
				<Picture />
				<FormLogin />
			</Row>
		</div>
	);
}
