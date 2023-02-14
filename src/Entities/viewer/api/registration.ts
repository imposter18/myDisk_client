import api from "@/Shared/api";
import { IViewerResponse } from "@/Shared/Types/response/IViewerResponse";
import { AxiosResponse } from "axios";
export async function registrationHTTP(
	email: string,
	password: string,
	userName: string
): Promise<AxiosResponse<IViewerResponse>> {
	return await api.post<IViewerResponse>("/registration", {
		email,
		password,
		userName,
	});
}
