import { AxiosError } from "axios";
import { IViewerResponse } from "@/Shared/Types/response/IViewerResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginHTTP } from "../../api/login";
import { IResponseError } from "../../lib/types";

interface ILoginPrors {
	email: string;
	password: string;
}
export const loginUser = createAsyncThunk<
	IViewerResponse,
	ILoginPrors,
	{ rejectValue: AxiosError<IResponseError> }
>("user/loginUser", async function ({ email, password }, { rejectWithValue }) {
	try {
		const res = await loginHTTP(email, password);
		// console.log(res, "res");
		return res.data as IViewerResponse;
	} catch (e) {
		return rejectWithValue(e);
	}
});
