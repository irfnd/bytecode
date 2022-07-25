import axios from "../../helpers/axios";

export const login = (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/login`, data)
			.then((res) => {
				document.cookie = `token=${res.data.token}; path=/`;
        		document.cookie = `idUser=${res.data.data}; path=/`;
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const registerRecruiter = (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/recruiter`, data)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const registerJobSeeker = (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/jobseeker`, data)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
