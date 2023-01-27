import api from "@/Shared/http";
import { AuthResponse } from "@/Shared/Types/response/AuthResponse";
import { AxiosResponse } from "axios";
export async function loginHTTP(
	email: string,
	password: string
): Promise<AxiosResponse<AuthResponse>> {
	return await api.post<AuthResponse>("/login", { email, password });
}
