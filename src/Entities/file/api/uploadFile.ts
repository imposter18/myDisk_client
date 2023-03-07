import api from "@/Shared/api";
import axios, { AxiosResponse } from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export async function uploadFileHTTP(
	formData: any,
	config: any
): Promise<AxiosResponse<IFileResponse>> {
	return await api.post<IFileResponse>(
		`/upload`,

		formData,
		config
	);
}
