import { AxiosError } from "axios";
import { AuthResponse } from "@/Shared/Types/response/AuthResponse";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { registrationHTTP } from "../../api/registration";

interface IRegistrationPrors {
	email: string;
	password: string;
	userName: string;
}

export const registrationUser = createAsyncThunk<
	AuthResponse,
	IRegistrationPrors,
	{ rejectValue: AxiosError }
>(
	"user/registrationUser",
	async function ({ email, password, userName }, { rejectWithValue }) {
		try {
			const res = await registrationHTTP(email, password, userName);
			return res.data as AuthResponse;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
