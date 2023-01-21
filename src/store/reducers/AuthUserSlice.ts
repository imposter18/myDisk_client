import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { AuthResponse } from "../../models/response/AuthResponse";
import AuthService from "../../service/AuthService";

interface ILoginPrors {
	email: string;
	password: string;
}
interface IRegistrationPrors {
	email: string;
	password: string;
	userName: string;
}

const initialState = {
	currentUser: {},
	isLoaging: true,
	isAuth: false,
	error: false,
};
export const loginUser = createAsyncThunk<AuthResponse, ILoginPrors>(
	"user/loginUser",
	async function ({ email, password }, { rejectWithValue }) {
		try {
			const res = await AuthService.login(email, password);
			console.log(res, "res");
			return res.data as AuthResponse;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
export const registrationUser = createAsyncThunk<
	AuthResponse,
	IRegistrationPrors
>("user/registrationUser", async function ({ email, password, userName }) {
	const res = await AuthService.registration(email, password, userName);
	return res.data as AuthResponse;
});
export const logout = createAsyncThunk<void>(
	"user/registrationUser",
	async function () {
		const res = await AuthService.logout();
	}
);

export const UserSlice = createSlice({
	name: "User",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			state.currentUser = action.payload;
		},
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state) => {
			state.isLoaging = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			console.log(action.payload, "action");
			localStorage.setItem("token", action.payload.accessToken);
			state.isLoaging = false;
			state.currentUser = action.payload.user;
		});
		builder.addCase(loginUser.rejected, (state, action) => {});
	},
});

// export const { loginUser } = UserSlice.actions;

export const userReducer = UserSlice.reducer;
