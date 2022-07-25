import Field from "../Atoms/Field";

export default function FieldsRegisterJobseeker(props) {
	const { register, errors } = props;

	return (
		<>
			<Field
				{...{
					name: "name",
					label: "Nama",
					placeholder: "Masukan Nama Lengkap",
					register,
					errors,
				}}
			/>
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
					name: "phoneNumber",
					label: "No. Handphone",
					placeholder: "Masukan No. Handphone",
					register,
					errors,
				}}
			/>
			<Field
				{...{
					name: "company",
					label: "Perusahaan",
					placeholder: "Masukan Nama Perusahaan Anda",
					register,
					errors,
				}}
			/>
			<Field
				{...{
					name: "position",
					label: "Jabatan",
					placeholder: "Masukan Posisi di Perusahaan Anda",
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
			<Field
				{...{
					name: "rePassword",
					type: "password",
					label: "Konfirmasi Kata Sandi",
					placeholder: "Masukan Konfirmasi Kata Sandi",
					register,
					errors,
				}}
			/>
		</>
	);
}
