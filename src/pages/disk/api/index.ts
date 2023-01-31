import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFileResponse } from "../models/types/IFileResponse";
export async function getFileHTTP(
	currentDir: string
): Promise<AxiosResponse<IFileResponse[]>> {
	return await api.get<IFileResponse[]>(
		`/files${currentDir ? "?parent=" + currentDir : ""}`
	);
}

// export async function CreateDirHTTP(
// 	currentDir: string
// ): Promise<AxiosResponse<any>> {
// 	return await api.get<any>(
// 		`/files`,{
// 			name,
// 			type
// 		}
// 	);
// }
