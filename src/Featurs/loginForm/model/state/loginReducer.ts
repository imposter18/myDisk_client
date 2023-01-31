import { loginUser } from "../thunks/AT-loginUser";
import { IinitialState } from "@/Shared/store/reducers/authUser/AuthUserSlice";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

export function loginReducer(builder: ActionReducerMapBuilder<IinitialState>) {
	console.log(builder);
	builder.addCase(loginUser.pending, (state) => {
		console.log(builder);
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(loginUser.fulfilled, (state, action) => {
		state.firstLoading = false;
		localStorage.setItem("token", action.payload.accessToken);
		state.isLoaging = false;
		state.isAuth = true;
		state.currentUser = action.payload.user;
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
}
