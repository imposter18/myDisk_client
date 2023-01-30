import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { logoutHTTP } from "../api";

export const logoutUser = createAsyncThunk<
	void,
	null,
	{ rejectValue: AxiosError }
>("user/logiut", async function (_, { rejectWithValue }) {
	try {
		const res = await logoutHTTP();
	} catch (e) {
		return rejectWithValue(e);
	}
});
