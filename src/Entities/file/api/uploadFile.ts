import api from "@/Shared/api";
import axios, {
	AxiosHeaders,
	AxiosProgressEvent,
	AxiosProxyConfig,
	AxiosRequestConfig,
	AxiosResponse,
	RawAxiosRequestConfig,
} from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export async function uploadFileHTTP(
	formData: FormData,
	config: RawAxiosRequestConfig
): Promise<AxiosResponse<IFileResponse>> {
	return await api.post<IFileResponse>(`/upload`, formData, config);
}
