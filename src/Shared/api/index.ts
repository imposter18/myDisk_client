import axios from "axios";
import { IViewerResponse } from "@/Shared/Types/response/IViewerResponse";

export const API_URL = "http://localhost:5000/api";
export const API_URL_STATIC = "http://localhost:5000/";

const api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
	return config;
});
api.interceptors.response.use(
	(config) => {
		// console.log(config, "config");
		return config;
	},
	async (error) => {
		const originalRequrst = error.config;
		if (
			error.response.status == 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequrst._isRetry = true;
			try {
				// console.log("refresh");
				const res = await axios.get<IViewerResponse>(`${API_URL}/refresh`, {
					withCredentials: true,
				});
				localStorage.setItem("token", res.data.accessToken);
				return api.request(originalRequrst);
			} catch (e) {
				console.log(e);
			}
		}
		throw error;
	}
);

export default api;
