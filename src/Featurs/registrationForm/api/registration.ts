import api from "@/Shared/http";
import { AuthResponse } from "@/Shared/Types/response/AuthResponse";
import { AxiosResponse } from "axios";
export async function registrationHTTP(
	email: string,
	password: string,
	userName: string
): Promise<AxiosResponse<AuthResponse>> {
	return await api.post<AuthResponse>("/registration", {
		email,
		password,
		userName,
	});
}
