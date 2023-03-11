import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "@/Shared/Types/IUser";
import { loginAction } from "../actions/loginAction";
import { registrationAction } from "../actions/registrationAction";
import { checkAuthAction } from "../actions/checkAuthAction";
import { logoutAction } from "../actions/logoutAction";
import { getUserSpaceAction } from "../actions/getUserSpaceAction";

export interface IinitialState {
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
		loginAction(builder);

		registrationAction(builder);

		logoutAction(builder);

		checkAuthAction(builder);

		getUserSpaceAction(builder);
	},
});

export const userReducer = UserSlice.reducer;
