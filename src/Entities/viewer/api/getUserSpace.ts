import api from "@/Shared/api";
// import { IViewerResponse } from "@/Shared/Types/response/IViewerResponse";
import { IUser } from "@/Shared/Types/IUser";
import { AxiosResponse } from "axios";
export async function getUserSpace(): Promise<AxiosResponse<IUser>> {
	return await api.get<IUser>("/updateUserSpace");
}
