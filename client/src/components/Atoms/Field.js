import React from "react";
import { Form } from "react-bootstrap";

function Field(props) {
	const { name, label, type, placeholder, register, errors } = props;

	return (
		<Form.Group className="mb-4" name={name}>
			<Form.Label className="text-silver">{label}</Form.Label>
			<Form.Control
				size="lg"
				className="fs-16 rounded"
				{...{ name, label, type: type || "text", placeholder }}
				{...register(name)}
				isInvalid={!!errors[name]}
			/>
			<Form.Control.Feedback type="invalid">{errors[name] && errors[name].message}</Form.Control.Feedback>
		</Form.Group>
	);
}

export default Field;
