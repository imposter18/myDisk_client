import { getUserSpaceThunk } from "../thunks/getUserSpaceThunk";
import { IinitialState } from "@/Entities/viewer/model/store/AuthUserSlice";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

export function getUserSpaceAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(getUserSpaceThunk.pending, (state) => {
		// state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(getUserSpaceThunk.fulfilled, (state, action) => {
		// state.isLoaging = false;
		state.currentUser.diskSpace = action.payload.diskSpace;
		state.currentUser.usedSpace = action.payload.usedSpace;
	});
	builder.addCase(getUserSpaceThunk.rejected, (state, action) => {
		// state.isLoaging = false;
		if (action) {
			state.error = action.payload?.response?.data;
		} else {
			state.error = action.error.message;
		}
	});
}
