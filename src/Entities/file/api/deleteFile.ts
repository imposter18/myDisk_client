import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export async function deletetFileHTTP(
	file: IFileResponse
): Promise<AxiosResponse<IFileResponse>> {
	return await api.delete(`/files?id=${file._id}`);
}
