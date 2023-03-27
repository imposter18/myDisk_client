import { AxiosError } from "axios";
import { IViewerResponse } from "@/Shared/Types/response/IViewerResponse";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { registrationHTTP } from "../../api/registration";
import { IResponseError } from "../../lib/types";

interface IRegistrationPrors {
	email: string;
	password: string;
}

export const registrationUser = createAsyncThunk<
	IViewerResponse,
	IRegistrationPrors,
	{ rejectValue: AxiosError<IResponseError> }
>(
	"user/registrationUser",
	async function ({ email, password }, { rejectWithValue }) {
		try {
			const res = await registrationHTTP(email, password);
			return res.data as IViewerResponse;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
