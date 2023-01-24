import { AxiosError } from "axios";
import { AuthResponse } from "../../../models/response/AuthResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../service/AuthService";

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
		const res = await AuthService.login(email, password);
		console.log(res, "res");
		return res.data as AuthResponse;
	} catch (e) {
		return rejectWithValue(e);
	}
});
