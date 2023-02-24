import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export async function getDirStackHTTP(
	childrenDir: any
): Promise<AxiosResponse<IFileResponse[]>> {
	return await api.get<IFileResponse[]>(
		`/getPerent${childrenDir ? "?id=" + childrenDir : ""}`,

		childrenDir
	);
}
