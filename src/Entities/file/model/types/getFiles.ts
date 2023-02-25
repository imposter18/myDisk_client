import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export interface IGetFiles {
	files: IFileResponse[];
	currentDir: IFileResponse;
}
