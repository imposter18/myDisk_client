import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import AuthService from "../../../service/AuthService";

export const logoutUser = createAsyncThunk<
	void,
	null,
	{ rejectValue: AxiosError }
>("user/logiut", async function (_, { rejectWithValue }) {
	try {
		const res = await AuthService.logout();
	} catch (e) {
		return rejectWithValue(e);
	}
});
