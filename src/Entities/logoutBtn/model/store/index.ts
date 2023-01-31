import { logoutUser } from "../thunks/AT-logoutUser";
import { IinitialState } from "@/Shared/store/reducers/authUser/AuthUserSlice";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

export function logoutReducer(builder: ActionReducerMapBuilder<IinitialState>) {
	builder.addCase(logoutUser.pending, (state) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(logoutUser.fulfilled, (state, action) => {
		localStorage.removeItem("token");
		state.isLoaging = false;
		state.isAuth = false;
		state.currentUser = {};
	});
	builder.addCase(logoutUser.rejected, (state, action) => {
		state.isLoaging = false;
		if (action) {
			state.error = action.payload.message;
		} else {
			state.error = action.error.message;
		}
	});
}
