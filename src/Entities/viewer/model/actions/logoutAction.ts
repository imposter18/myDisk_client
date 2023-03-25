import { logoutUser } from "../thunks/logoutUser";
import { IinitialState } from "@/Entities/viewer/model/store/AuthUserSlice";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IUser } from "@/Shared/Types/IUser";

export function logoutAction(builder: ActionReducerMapBuilder<IinitialState>) {
	builder.addCase(logoutUser.pending, (state) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(logoutUser.fulfilled, (state, action) => {
		localStorage.removeItem("token");
		state.isLoaging = false;
		state.isAuth = false;
		state.currentUser = {} as IUser;
		state.error = null;
	});
	builder.addCase(logoutUser.rejected, (state, action) => {
		state.isLoaging = false;
		if (action) {
			state.error = action.payload?.response?.data?.message;
		} else {
			state.error = action.payload.message;
		}
	});
}
