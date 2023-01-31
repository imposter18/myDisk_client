import { registrationUser } from "../thunks/AT-registrationUser";
import { IinitialState } from "@/Shared/store/reducers/authUser/AuthUserSlice";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

export function registrationReduser(
	builder: ActionReducerMapBuilder<IinitialState>
) {
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
}
