import axios from "axios";
import Cookies from "js-cookie";

const interceptor = axios.create({
	baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

interceptor.interceptors.request.use(
	(request) => {
		request.headers = {
			Authorization: `Bearer ${Cookies.get("token")}`,
		};
		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);

interceptor.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 403) {
			Cookies.remove("token");
			window.location.href = "/login";
		}
		return Promise.reject(error);
	}
);

export default interceptor;
