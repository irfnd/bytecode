import axios from "../../helpers/axios";

export const login = ({ email, password }) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`auth/login`, { email, password }, { withCredentials: true })
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const register = (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post("auth/register", data)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
