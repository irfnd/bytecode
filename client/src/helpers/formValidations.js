import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

export const registerJobseeker = yup.object({
	name: yup.string().trim().required("Harap masukan nama lengkap!"),
	email: yup.string().trim().email("Masukan email yang valid!").required("Harap masukan alamat email!"),
	phoneNumber: yup.string().trim().required("Harap masukan nomor telepon!"),
	password: yup
		.string()
		.trim()
		.min(8, "Password minimal 8 karakter!")
		.minLowercase(1, "Password minimal 1 karakter huruf kecil!")
		.minUppercase(1, "Password minimal 1 karakter huruf kapital!")
		.minNumbers(1, "Password minimal 1 nomor!")
		.minSymbols(1, "Password minimal 1 karakter simbol!")
		.required("Harap masukan kata sandi!"),
	rePassword: yup
		.string()
		.trim()
		.required("Harap masukan konfirmasi kata sandi!")
		.oneOf([yup.ref("password"), null], "Password tidak sama!"),
});

export const registerRecruiter = yup.object({
	name: yup.string().trim().required("Harap masukan nama lengkap!"),
	email: yup.string().trim().email("Masukan email yang valid!").required("Harap masukan alamat email!"),
	phoneNumber: yup.string().trim().required("Harap masukan nomor telepon!"),
	company: yup.string().trim().required("Harap masukan nama perusahaan anda!"),
	position: yup.string().trim().required("Harap masukan posisi di perusahaan anda!"),
	password: yup
		.string()
		.trim()
		.min(8, "Password minimal 8 karakter!")
		.minLowercase(1, "Password minimal 1 karakter huruf kecil!")
		.minUppercase(1, "Password minimal 1 karakter huruf kapital!")
		.minNumbers(1, "Password minimal 1 nomor!")
		.minSymbols(1, "Password minimal 1 karakter simbol!")
		.required("Harap masukan kata sandi!"),
	rePassword: yup
		.string()
		.trim()
		.required("Harap masukan konfirmasi kata sandi!")
		.oneOf([yup.ref("password"), null], "Password tidak sama!"),
});

export const login = yup.object({
	email: yup.string().trim().email("Masukan email yang valid!").required("Harap masukan alamat email!"),
	password: yup.string().trim().required("Harap masukan kata sandi!"),
});
