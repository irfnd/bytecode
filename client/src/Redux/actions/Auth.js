import axios from "../../helpers/axios";

export const login = ({email, password}) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`/login`, {email, password})
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const registerRecruiter = (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post("/recruiter", data)
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
			.post("/jobseeker", data)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
