import { getToken } from "@/utils/handleJWT";
import axios from "axios";

export default function configureInterceptor() {
	axios.interceptors.request.use(
		async function (config) {
			const token = await getToken();
			
			if (token) {
				config.headers.Authorization = `bearer ${token}`;
			}
			
			return config;
		},
		function (error) {
			return Promise.reject(error);
		}
	);
}