import { IResponseErrorFile } from "./responsError";

export interface IResponseErrorFileUpload extends IResponseErrorFile {
	data: {
		fileName: string;
		uploadId: string;
	};
}
