import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "@/Shared/Types/IUser";
import { loginReducer } from "@/Featurs/loginForm";
import { registrationReduser } from "@/Featurs/registrationForm";
import { checkAuthReduser } from "@/Entities/checkAuth";
import { logoutReducer } from "@/Entities/logoutBtn";

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
		loginReducer(builder);
		//registration
		registrationReduser(builder);
		//logout
		logoutReducer(builder);
		//checkAuth
		checkAuthReduser(builder);
	},
});

export const userReducer = UserSlice.reducer;
