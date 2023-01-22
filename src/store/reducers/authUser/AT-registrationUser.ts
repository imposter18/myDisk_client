import { AxiosError } from "axios";
import { AuthResponse } from "../../../models/response/AuthResponse";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../service/AuthService";

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
			const res = await AuthService.registration(email, password, userName);
			return res.data as AuthResponse;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
