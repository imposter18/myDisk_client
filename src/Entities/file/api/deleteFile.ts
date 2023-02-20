import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFile } from "@/Shared/Types/IFile";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
interface IDelResponse {
	message: string;
}
export async function deletetFileHTTP(
	file: IFileResponse
): Promise<AxiosResponse<IFileResponse>> {
	return await api.delete(`/files?id=${file._id}`);
}
