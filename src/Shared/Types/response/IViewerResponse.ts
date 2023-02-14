import { IUser } from "../IUser";

export interface IViewerResponse {
	accessToken: string;
	refreshToken: string;
	user: IUser;
}
