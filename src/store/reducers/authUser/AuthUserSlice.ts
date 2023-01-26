import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IUser } from "../../../models/IUser";
import { AuthResponse } from "../../../models/response/AuthResponse";
import AuthService from "../../../service/AuthService";
import { loginUser } from "./AT-loginUser";
import { registrationUser } from "./AT-registrationUser";
import { logoutUser } from "./AT-logoutUser";
import { checkAuth } from "./AT-checkAuth";

interface IinitialState {
	currentUser: IUser;
	isLoaging: boolean;
	isAuth: boolean;
	error: string | null | undefined;
	firstLoading: boolean;
}

const initialState: IinitialState = {
	currentUser: {} as IUser,
	isLoaging: false,
	isAuth: false,
	error: null,
	firstLoading: true,
};

export const UserSlice = createSlice({
	name: "User",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//login
		builder.addCase(loginUser.pending, (state) => {
			state.isLoaging = true;
			state.error = null;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.firstLoading = false;
			localStorage.setItem("token", action.payload.accessToken);
			state.isLoaging = false;
			state.isAuth = true;
			state.currentUser = action.payload.user;
			console.log(action, "action");
			console.log(state, "state");
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.firstLoading = false;
			state.isLoaging = false;
			if (action) {
				state.error = action.payload?.response?.data?.message;
			} else {
				state.error = action.payload.message;
			}
		});
		//registration
		builder.addCase(registrationUser.pending, (state) => {
			state.isLoaging = true;
			state.error = null;
		});
		builder.addCase(registrationUser.fulfilled, (state, action) => {
			localStorage.setItem("token", action.payload.accessToken);
			state.isLoaging = false;
			state.isAuth = true;
			state.currentUser = action.payload.user;
		});
		builder.addCase(registrationUser.rejected, (state, action) => {
			state.isLoaging = false;
			if (action) {
				state.error = action.payload.message;
			} else {
				state.error = action.error.message;
			}
		});
		//logout
		builder.addCase(logoutUser.pending, (state) => {
			state.isLoaging = true;
			state.error = null;
		});
		builder.addCase(logoutUser.fulfilled, (state, action) => {
			localStorage.removeItem("token");
			state.isLoaging = false;
			state.isAuth = false;
			state.currentUser = {} as IUser;
		});
		builder.addCase(logoutUser.rejected, (state, action) => {
			state.isLoaging = false;
			if (action) {
				state.error = action.payload.message;
			} else {
				state.error = action.error.message;
			}
		});
		//checkAuth
		builder.addCase(checkAuth.pending, (state) => {
			state.isLoaging = true;
			state.error = null;
		});
		builder.addCase(checkAuth.fulfilled, (state, action) => {
			state.firstLoading = false;
			localStorage.setItem("token", action.payload.accessToken);
			state.isLoaging = false;
			state.isAuth = true;
			state.currentUser = action.payload.user;
		});
		builder.addCase(checkAuth.rejected, (state, action) => {
			state.firstLoading = false;
			state.isLoaging = false;
			if (action) {
				state.error = action.payload.message;
			} else {
				state.error = action.error.message;
			}
		});
	},
});

export const userReducer = UserSlice.reducer;
