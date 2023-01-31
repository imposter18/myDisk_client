import { checkAuth } from "../thunks/AT-checkAuth";
import { IinitialState } from "@/Shared/store/reducers/AuthUserSlice";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

export function checkAuthAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
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
}
