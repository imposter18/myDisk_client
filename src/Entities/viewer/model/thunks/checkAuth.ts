import axios, { AxiosError } from "axios";
import { IViewerResponse } from "@/Shared/Types/response/IViewerResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "@/Shared/api/index";
import { IResponseError } from "../../lib/types";

export const checkAuth = createAsyncThunk<
	IViewerResponse,
	null,
	{ rejectValue: AxiosError<IResponseError> }
>("user/checkAuth", async function (_, { rejectWithValue }) {
	try {
		const res = await axios.get<IViewerResponse>(`${API_URL}/refresh`, {
			withCredentials: true,
		});
		return res.data as IViewerResponse;
	} catch (e) {
		return rejectWithValue(e);
	}
});
