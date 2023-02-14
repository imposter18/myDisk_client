import api from "@/Shared/api";
import { IViewerResponse } from "@/Shared/Types/response/IViewerResponse";
import { AxiosResponse } from "axios";
export async function loginHTTP(
	email: string,
	password: string
): Promise<AxiosResponse<IViewerResponse>> {
	return await api.post<IViewerResponse>("/login", { email, password });
}
