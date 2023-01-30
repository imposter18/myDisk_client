import axios, { AxiosError } from "axios";
import { AuthResponse } from "@/Shared/Types/response/AuthResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "@/Shared/api/index";

export const checkAuth = createAsyncThunk<
	AuthResponse,
	null,
	{ rejectValue: AxiosError }
>("user/checkAuth", async function (_, { rejectWithValue }) {
	try {
		const res = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
			withCredentials: true,
		});
		return res.data as AuthResponse;
	} catch (e) {
		return rejectWithValue(e);
	}
});
