import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export async function CreateDirHTTP(
	currentDir: string,
	name: string,
	type: string
): Promise<AxiosResponse<IFileResponse>> {
	return await api.post<IFileResponse>(`/files`, {
		parent: currentDir,
		name,
		type,
	});
}
