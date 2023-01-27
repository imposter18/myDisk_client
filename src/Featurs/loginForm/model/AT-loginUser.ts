import { AxiosError } from "axios";
import { AuthResponse } from "@/Shared/Types/response/AuthResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginHTTP } from "../api/login";

interface IResponseError {
	errprs: Array<string> | [];
	message: string;
}
interface ILoginPrors {
	email: string;
	password: string;
}
export const loginUser = createAsyncThunk<
	AuthResponse,
	ILoginPrors,
	{ rejectValue: AxiosError<IResponseError> }
>("user/loginUser", async function ({ email, password }, { rejectWithValue }) {
	try {
		const res = await loginHTTP(email, password);
		// console.log(res, "res");
		return res.data as AuthResponse;
	} catch (e) {
		return rejectWithValue(e);
	}
});
