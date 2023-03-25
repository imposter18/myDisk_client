import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export async function renameFileHTTP(
	newName: string,
	id: string
): Promise<AxiosResponse<IFileResponse>> {
	return await api.post<IFileResponse>(`/renameFile`, {
		newName,
		id,
	});
}
