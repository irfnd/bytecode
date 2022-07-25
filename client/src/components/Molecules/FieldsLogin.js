import Field from "../Atoms/Field";

export default function FieldsLogin(props) {
	const { register, errors } = props;

	return (
		<>
			<Field
				{...{
					name: "email",
					type: "email",
					label: "Email",
					placeholder: "Masukan Alamat Email",
					register,
					errors,
				}}
			/>
			<Field
				{...{
					name: "password",
					type: "password",
					label: "Kata Sandi",
					placeholder: "Masukan Kata Sandi",
					register,
					errors,
				}}
			/>
		</>
	);
}
