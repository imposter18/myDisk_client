import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export async function downloadFileHTTP(file: IFileResponse): Promise<void> {
	await api
		.get<Blob>(`/download?id=${file._id}`, { responseType: "blob" })
		.then((response) => {
			console.log(response, "response");
			if (response.status === 200) {
				const downloadHref = URL.createObjectURL(response.data);
				const link = document.createElement("a");
				link.href = downloadHref;
				link.download = file.name;
				document.body.appendChild(link);
				link.click();

				document.body.removeChild(link);
				URL.revokeObjectURL(downloadHref);
			}
		});
}
