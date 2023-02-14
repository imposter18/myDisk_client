import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
export async function getFileHTTP(
	currentDir: string
): Promise<AxiosResponse<IFileResponse[]>> {
	return await api.get<IFileResponse[]>(
		`/files${currentDir ? "?parent=" + currentDir : ""}`
	);
}
