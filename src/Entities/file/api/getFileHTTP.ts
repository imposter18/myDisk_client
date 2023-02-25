import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { IGetFiles } from "../model/types/getFiles";

export async function getFileHTTP(
	currentDir: string
): Promise<AxiosResponse<IGetFiles>> {
	return await api.get<IGetFiles>(
		`/files${currentDir ? "?parent=" + currentDir : ""}`
	);
}
