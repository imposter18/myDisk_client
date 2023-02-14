import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export async function uploadFileHTTP(
	formData: any
): Promise<AxiosResponse<IFileResponse>> {
	return await api.post<IFileResponse>(
		`/upload`,

		formData,
		{
			onUploadProgress: (progressEvent) => {
				// let progress = Math.round(
				// 	(progressEvent.loaded * 100) / progressEvent.bytes
				// );
				let progress = Math.round(
					(progressEvent.loaded / progressEvent.total) * 100
				);
				console.log(progress, "progress");

				// @ts-ignore
				// const totalLength = progressEvent.lengthComputable;
				// ? progressEvent.total
				// : // @ts-ignore
				//   progressEvent.target.getResponseHeader("content-length") ||
				//   // @ts-ignore
				//   progressEvent.target.getResponseHeader(
				// 		"x-decompressed-content-length"
				//   );
				// onUploadProgress(progress);
				// console.log(totalLength, "totalLength");
				// if (totalLength) {
				// 	console.log(progress);
				// }
			},
		}
	);
}
