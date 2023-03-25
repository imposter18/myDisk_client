import api from "@/Shared/api";
import { AxiosResponse } from "axios";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { IGetFiles } from "../model/types/getFiles";
import { IGetFileProps } from "../model/thunk/getFileThunk";

export async function getFileHTTP(
	props: IGetFileProps
): Promise<AxiosResponse<IGetFiles>> {
	const { sort, derection, currentDir, search } = props;
	let url;
	if (search) {
		url = `/files/?search=${search}`;
	} else if (currentDir) {
		url = `/files?parent=${currentDir}&sort=${sort}&derection=${derection}`;
	} else {
		url = `/files?sort=${sort}&derection=${derection}`;
	}
	return await api.get<IGetFiles>(url);
}
