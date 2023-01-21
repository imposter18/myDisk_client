import api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
	static async login(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		console.log(email, "11email");
		console.log(password, "11password");
		return api.post<AuthResponse>("/login", { email, password });
	}
	static async registration(
		email: string,
		password: string,
		userName: string
	): Promise<AxiosResponse<AuthResponse>> {
		return api.post<AuthResponse>("/registration", {
			email,
			password,
			userName,
		});
	}
	static async logout(): Promise<void> {
		return api.post("/registration", {});
	}
}