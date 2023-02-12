import { registrationUser } from "../thunks/registrationUser";
import { IinitialState } from "@/Entities/viewer/model/store/AuthUserSlice";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

export function registrationAction(
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
			state.error = action.payload?.response?.data?.message;
		} else {
			state.error = action.payload.message;
		}
	});
}
